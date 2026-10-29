/* Woelag signature mark — Proudly Oudtshoorn */
(() => {
  function addOudtshoornMark() {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".woelag-oudtshoorn-mark")) return;

    const mark = document.createElement("div");
    mark.className = "woelag-oudtshoorn-mark";
    mark.setAttribute("aria-label", "Proudly Oudtshoorn");
    mark.innerHTML = `
      <svg viewBox="0 0 320 166" role="img" aria-label="Right-facing ostrich with the South African flag waving to the left" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="166" rx="2" fill="#fff"/>
        <g transform="translate(17 10)">
          <path d="M120 14 Q84 22 39 12 Q56 32 25 43 Q61 54 22 70 Q65 79 35 96 Q75 101 119 79 Z" fill="#fff" stroke="#a9a9a9" stroke-width="1"/>
          <path d="M120 14 Q84 22 39 12 Q56 32 25 43 L38 49 Q68 43 94 33 Z" fill="#de3831"/>
          <path d="M38 49 Q68 43 94 33 L120 14 L120 43 Q89 55 51 62 L22 70 Q43 59 38 49Z" fill="#fff"/>
          <path d="M22 70 Q62 65 94 48 L120 43 L120 64 Q85 76 51 84 L35 96 Q50 81 22 70Z" fill="#007a4d"/>
          <path d="M35 96 Q70 91 98 74 L120 64 L120 79 Q75 101 35 96Z" fill="#002395"/>
          <path d="M17 42 L31 48 L23 58 L39 69 L29 80 L42 91 L35 96 Q75 101 119 79 L119 64 L92 68 L69 60 L95 48 L119 43 L119 14 L87 35 L43 43Z" fill="#ffb612"/>
          <path d="M17 42 L31 48 L23 58 L39 69 L29 80 L42 91 L35 96 Q75 101 119 79 L119 64 L92 68 L69 60 L95 48 L119 43 L119 14 L87 35 L43 43Z" fill="#fff" opacity=".01"/>
          <path d="M17 42 L31 48 L23 58 L39 69 L29 80 L42 91 L35 96 Q75 101 119 79 L119 64 L92 68 L69 60 L95 48 L119 43 L119 14 L87 35 L43 43Z" fill="none" stroke="#fff" stroke-width="1"/>
          <path d="M17 42 L31 48 L23 58 L39 69 L29 80 L42 91 L35 96" fill="none" stroke="#000" stroke-width="10"/>
          <path d="M17 42 L31 48 L23 58 L39 69 L29 80 L42 91 L35 96" fill="none" stroke="#ffb612" stroke-width="6"/>
          <path d="M120 5 V111" stroke="#8b6b3f" stroke-width="3"/>
          <circle cx="120" cy="4" r="4" fill="#b99a5a"/>
        </g>
        <g transform="translate(90 3)">
          <path d="M64 91 Q45 75 26 84 Q13 89 15 101 Q25 114 53 108 Q73 104 78 96Z" fill="#28251f" stroke="#181713" stroke-width="1.5"/>
          <path d="M28 91 Q10 87 3 103 Q18 120 38 108Z" fill="#e4d8bd"/>
          <path d="M43 96 Q22 111 25 120 Q42 126 59 109Z" fill="#d7c9aa"/>
          <path d="M62 91 Q72 73 70 45 Q68 29 78 22 Q87 17 94 22 L109 24 L96 29 L87 28 Q82 31 83 44 Q88 73 79 94" fill="#c7b9a1" stroke="#6e6253" stroke-width="1.4"/>
          <path d="M92 22 L112 25 L96 29Z" fill="#d88e80" stroke="#6b4a42" stroke-width="1"/>
          <circle cx="87" cy="23" r="2.5" fill="#26231f"/>
          <circle cx="87.5" cy="22.5" r=".8" fill="#fff"/>
          <path d="M38 107 L31 135 L26 142 L34 143 L43 137 L48 109 M63 108 L70 135 L78 142 L86 142 L80 135 L77 104" fill="none" stroke="#9b7770" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 142 L19 145 L37 145 M78 142 L73 145 L90 145" fill="none" stroke="#57483f" stroke-width="2" stroke-linecap="round"/>
          <path d="M31 91 Q47 84 63 92 M33 98 Q49 93 62 99 M39 86 L35 98 M49 85 L47 99 M58 88 L56 101" fill="none" stroke="#5e5549" stroke-width="1.3" stroke-linecap="round"/>
        </g>
        <text x="160" y="157" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" letter-spacing="3" fill="#354b38">PROUDLY OUDTSHOORN</text>
      </svg>`;
    footer.appendChild(mark);

    if (!document.getElementById("woelag-oudtshoorn-style")) {
      const style = document.createElement("style");
      style.id = "woelag-oudtshoorn-style";
      style.textContent = `
        .woelag-oudtshoorn-mark{display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:230px;gap:4px;margin:18px auto 0;padding:6px 10px;background:#fff;color:#354b38;text-align:center}
        .woelag-oudtshoorn-mark svg{display:block;width:170px;height:auto;max-width:100%}
        @media(max-width:520px){.woelag-oudtshoorn-mark{margin-top:14px}.woelag-oudtshoorn-mark svg{width:150px}}
      `;
      document.head.appendChild(style);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addOudtshoornMark);
  else addOudtshoornMark();
})();