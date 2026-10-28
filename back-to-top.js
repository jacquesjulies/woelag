/* Woelag: accessible back-to-top button, shared across all site pages */
(() => {
  // Add the subtle local signature to each page footer.
  const addLocalSignature = () => {
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
          <path d="M41 30c4-7 7-15 5-21-1-3-4-4-6-2-2 2-1 5 2 6l5 1M47 14l8 2-7 3M45 8l2-3" stroke-width="2.4"/>
          <path d="M25 47l-2 12m2-4-6 5m6-5 5 5M39 46l3 13m-1-5 6 5m-6-5-4 5M9 62h47M14 59l-3 3m39-3 4 3m-37-2 2-4m25 4 2-4" stroke-width="1.6"/>
        </g>
      </svg><span>PROUDLY OUDTSHOORN</span>`;
    const style = document.createElement("style");
    style.textContent = ".woelag-oudtshoorn-mark{display:flex;flex-direction:column;align-items:center;gap:5px;margin:22px auto 0;padding:0 10px 8px;color:#65714b;text-align:center}.woelag-oudtshoorn-mark svg{display:block;width:39px;height:43px}.woelag-oudtshoorn-mark span{font:600 9px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;letter-spacing:.19em;color:#65714b}@media(max-width:520px){.woelag-oudtshoorn-mark{margin-top:18px}.woelag-oudtshoorn-mark svg{width:34px;height:38px}.woelag-oudtshoorn-mark span{font-size:8px}}";
    document.head.appendChild(style);
    footer.appendChild(mark);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addLocalSignature);
  else addLocalSignature();

  if (document.getElementById("woelag-back-to-top")) return;

  const style = document.createElement("style");
  style.textContent = `
    #woelag-back-to-top {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 9999;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 16px;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 999px;
      background: #355747;
      color: #fff;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      box-shadow: 0 5px 18px rgba(0,0,0,.18);
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(8px);
      transition: opacity .2s ease, transform .2s ease, background-color .2s ease, visibility .2s;
    }
    #woelag-back-to-top.is-visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    #woelag-back-to-top:hover { background: #263f34; }
    #woelag-back-to-top:focus-visible { outline: 3px solid #d8b66a; outline-offset: 3px; }
    #woelag-back-to-top svg { width: 16px; height: 16px; flex: 0 0 auto; }
    @media (max-width: 480px) {
      #woelag-back-to-top { right: 14px; bottom: 14px; padding: 11px 14px; }
    }
    @media (prefers-reduced-motion: reduce) {
      #woelag-back-to-top { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.id = "woelag-back-to-top";
  button.type = "button";
  button.setAttribute("aria-label", "Back to top");
  button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Back to top</span>';
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  document.body.appendChild(button);

  const updateVisibility = () => button.classList.toggle("is-visible", window.scrollY > 320);
  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
})();