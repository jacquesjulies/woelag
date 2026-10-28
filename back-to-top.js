/* Woelag: accessible back-to-top button, shared across all site pages */
(() => {
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
      font: 600 14px/1.2 inherit;
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