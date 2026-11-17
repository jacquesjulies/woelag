#!/usr/bin/env python3
"""Refresh the homepage Supplement Spotlight no more than once every 30 days."""
import datetime as dt
import html
import json
import os
import re
import sys
import urllib.request

PAGE = "index.html"
START = "<!-- SUPPLEMENT_SPOTLIGHT_START -->"
END = "<!-- SUPPLEMENT_SPOTLIGHT_END -->"
IMAGE = "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=85"

def fail(message):
    print(message, file=sys.stderr)
    raise SystemExit(1)

def get_response_text(payload):
    if payload.get("output_text"):
        return payload["output_text"]
    for item in payload.get("output", []):
        for part in item.get("content", []):
            if part.get("type") in ("output_text", "text") and part.get("text"):
                return part["text"]
    fail("The content-generation API returned no readable article.")

def main():
    with open(PAGE, encoding="utf-8") as file:
        page = file.read()
    match = re.search(re.escape(START) + r"(.*?)" + re.escape(END), page, re.S)
    if not match:
        fail("Could not find the Supplement Spotlight markers in index.html.")

    today = dt.datetime.now(dt.timezone.utc).date()
    current_date = re.search(r'data-updated="(\\d{4}-\\d{2}-\\d{2})"', match.group(1))
    if current_date and os.environ.get("FORCE_SPOTLIGHT") != "1":
        last = dt.date.fromisoformat(current_date.group(1))
        if (today - last).days < 30:
            print(f"Spotlight is only {(today - last).days} days old; no update is due.")
            return

    key = os.environ.get("OPENAI_API_KEY")
    if not key:
        fail("OPENAI_API_KEY is not configured. Add it as a repository Actions secret before enabling automatic publication.")

    schema = {
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "kicker": {"type": "string"},
            "title": {"type": "string"},
            "paragraphs": {"type": "array", "items": {"type": "string"}, "minItems": 3, "maxItems": 4},
            "sources": {"type": "array", "minItems": 2, "maxItems": 4, "items": {
                "type": "object", "additionalProperties": False,
                "properties": {"title": {"type": "string"}, "url": {"type": "string"}},
                "required": ["title", "url"]
            }}
        },
        "required": ["kicker", "title", "paragraphs", "sources"]
    }
    prompt = (
        "Create the next Woelag Supplement Spotlight for a South African adult audience. "
        "Use web search to identify one supplement ingredient with credible evidence of current consumer "
        "or market interest, preferably including South African context. Do not mistake marketing popularity "
        "for clinical proof. Write 3-4 concise, original paragraphs (about 220-320 words total): explain what "
        "the ingredient is, what reliable human evidence does and does not show, food/lifestyle context, and "
        "important safety cautions/interactions. Do not give doses, instructions to start taking it, or claims "
        "to treat/cure/prevent disease. Do not recommend products or purchase links. Do not make claims about "
        "benefits for minors; include a clear sentence that children and teenagers should only consider "
        "supplements with parent/guardian and qualified health-professional guidance. Prioritise official "
        "health agencies, systematic reviews and reputable South African research. Include 2-4 exact source "
        "URLs that you actually consulted. If the trend cannot be substantiated, choose a well-documented "
        "ingredient and describe interest cautiously. Output only the requested JSON fields."
    )
    request_body = {
        "model": "gpt-5-mini",
        "tools": [{"type": "web_search_preview"}],
        "input": prompt,
        "text": {"format": {"type": "json_schema", "name": "supplement_spotlight", "strict": True, "schema": schema}}
    }
    req = urllib.request.Request(
        "https://api.openai.com/v1/responses",
        data=json.dumps(request_body).encode("utf-8"),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except Exception as exc:
        fail(f"Article generation request failed: {exc}")

    try:
        article = json.loads(get_response_text(payload))
    except Exception as exc:
        fail(f"Could not parse the generated article JSON: {exc}")

    def safe(value):
        return html.escape(str(value).strip(), quote=True)

    source_items = []
    for source in article["sources"]:
        url = source["url"].strip()
        if not url.startswith("https://"):
            continue
        source_items.append(f'<li><a href="{safe(url)}" target="_blank" rel="noopener noreferrer">{safe(source["title"])}</a></li>')
    if len(source_items) < 2:
        fail("The generated article did not include at least two valid HTTPS sources.")

    paragraphs = "".join(f"<p>{safe(p)}</p>" for p in article["paragraphs"] if p.strip())
    updated = today.isoformat()
    fragment = f'''
      <article class="spotlight-card" data-updated="{updated}">
        <img class="spotlight-image" src="{IMAGE}" alt="Wellness supplements and botanical ingredients arranged on a neutral surface" loading="lazy">
        <div class="spotlight-copy">
          <div class="eyebrow">{safe(article["kicker"])}</div>
          <h3>{safe(article["title"])}</h3>
          <div class="spotlight-meta">Published {today.strftime("%d %B %Y")} · Updated every 30 days</div>
          {paragraphs}
          <ul class="spotlight-sources">{''.join(source_items)}</ul>
          <div class="spotlight-note">This article is general information, not medical advice or a recommendation to buy or take a supplement. Children and teenagers should only consider supplements with guidance from a parent or guardian and a qualified health professional.</div>
        </div>
      </article>
    '''
    page = page[:match.start()] + START + fragment + END + page[match.end():]
    with open(PAGE, "w", encoding="utf-8") as file:
        file.write(page)
    print(f"Updated Supplement Spotlight: {article['title']} ({updated}).")

if __name__ == "__main__":
    main()
