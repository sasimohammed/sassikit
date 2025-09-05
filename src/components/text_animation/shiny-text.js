class ShinyText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const text = this.textContent || this.getAttribute("text") || "";
        const speed = this.getAttribute("speed") || "3s";
        const textColor = this.getAttribute("text-color") || "#000";
        const fontSize = this.getAttribute("font-size") || "inherit";
        const fontWeight = this.getAttribute("font-weight") || "bold";
        const fontFamily = this.getAttribute("font-family") || "inherit";

       
        const fixedShineColor = "rgba(255, 255, 255, 0.7)";

        shadow.innerHTML = `
      <style>
        .shiny-text {
          position: relative;
          display: inline-block;
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          color: ${textColor};
          background: linear-gradient(
            120deg,
            ${textColor},
            ${fixedShineColor},
            ${textColor}
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine ${speed} linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      </style>
      <span class="shiny-text">${text}</span>
    `;
    }
}

customElements.define("shiny-text", ShinyText);
