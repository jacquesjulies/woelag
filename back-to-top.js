/* Woelag: accessible back-to-top button, shared across all site pages */
(() => {
  // Add the subtle local signature to each page footer.
  const addLocalSignature = () => {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".woelag-oudtshoorn-mark")) return;
    const mark = document.createElement("div");
    mark.className = "woelag-oudtshoorn-mark";
    mark.setAttribute("aria-label", "Proudly Oudtshoorn");
    mark.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Ostrich.svg" alt="Ostrich" loading="lazy"><span>PROUDLY OUDTSHOORN</span>';
    const style = document.createElement("style");
    style.textContent = ".woelag-oudtshoorn-mark{display:flex;flex-direction:column;align-items:center;gap:5px;margin:22px auto 0;padding:0 10px 8px;color:#65714b;text-align:center}.woelag-oudtshoorn-mark img{display:block;width:31px;height:43px;object-fit:contain;transform:scaleX(-1);filter:grayscale(1) sepia(.45) saturate(.75) hue-rotate(25deg)}.woelag-oudtshoorn-mark span{font:600 9px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;letter-spacing:.19em;color:#65714b}@media(max-width:520px){.woelag-oudtshoorn-mark{margin-top:18px}.woelag-oudtshoorn-mark img{width:27px;height:38px}.woelag-oudtshoorn-mark span{font-size:8px}}";
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