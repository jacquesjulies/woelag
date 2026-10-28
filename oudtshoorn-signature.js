/* Woelag signature mark — Proudly Oudtshoorn */
(() => {
  function addOudtshoornMark() {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".woelag-oudtshoorn-mark")) return;

    const mark = document.createElement("div");
    mark.className = "woelag-oudtshoorn-mark";
    mark.setAttribute("aria-label", "Proudly Oudtshoorn");
    mark.innerHTML = `
      <svg viewBox="0 0 64 68" role="img" aria-label="Ostrich emblem" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 37c4-8 15-12 24-8 5 2 7 7 5 11-3 6-13 9-23 6-4-1-7-4-6-9Z" fill="currentColor" fill-opacity=".10" stroke-width="2.2"/>
          <path d="M20 37c5-5 13-7 20-4M21 42c6 2 12 2 17-1M25 34l-3 6m8-8-2 9m9-8-2 8" stroke-width="1.5"/>
          <path d="M41 30c4-7 7-15 5-21-1-3-4-4-6-2-2 2-1 5 2 6l5 1" stroke-width="2.8"/>
          <path d="M47 14l8 2-7 3M45 8l2-3" stroke-width="1.8"/>
          <path d="M25 47l-2 12m2-4-6 5m6-5 5 5M39 46l3 13m-1-5 6 5m-6-5-4 5" stroke-width="2"/>
          <path d="M9 62h47M14 59l-3 3m39-3 4 3M17 60l2-4m25 4 2-4" stroke-width="1.4"/>
        </g>
      </svg>
      <span>PROUDLY OUDTSHOORN</span>`;
    footer.appendChild(mark);

    if (!document.getElementById("woelag-oudtshoorn-style")) {
      const style = document.createElement("style");
      style.id = "woelag-oudtshoorn-style";
      style.textContent = `
        .woelag-oudtshoorn-mark{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;margin:22px auto 0;padding:0 10px 8px;color:#65714b;text-align:center}
        .woelag-oudtshoorn-mark svg{display:block;width:39px;height:43px}
        .woelag-oudtshoorn-mark span{font:600 9px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.19em;color:#65714b}
        @media(max-width:520px){.woelag-oudtshoorn-mark{margin-top:18px}.woelag-oudtshoorn-mark svg{width:34px;height:38px}.woelag-oudtshoorn-mark span{font-size:8px}}
      `;
      document.head.appendChild(style);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addOudtshoornMark);
  else addOudtshoornMark();
})();