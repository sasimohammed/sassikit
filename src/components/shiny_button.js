class ShinyButton extends HTMLElement {
    static get observedAttributes() {
        return [
            "bg-color",
            "width",
            "height",
            "text-color",
            "font-size",
            "font-weight",
            "font-family",
            "text",
            "href"
        ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const bgColor = this.getAttribute("bg-color") || "#3b82f6";
        const width = this.getAttribute("width") || "150px";
        const height = this.getAttribute("height") || "50px";
        const textColor = this.getAttribute("text-color") || "#ffffff";
        const fontSize = this.getAttribute("font-size") || "0.95rem";
        const fontWeight = this.getAttribute("font-weight") || "bold";
        const fontFamily = this.getAttribute("font-family") || "Poppins, sans-serif";
        const buttonText = this.getAttribute("text") || "Click Me";
        const href = this.getAttribute("href") || null; // 👈 new
        const shineColor = "rgba(255,255,255,0.4)";

        // Choose element type based on href
        const wrapperTag = href ? "a" : "button";
        const hrefAttr = href ? `href="${href}" target="_blank" rel="noopener noreferrer"` : "";

        this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }

        ${wrapperTag} {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: ${bgColor};
          border: none;
          color: ${textColor};
          font-family: ${fontFamily},serif;
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease;
          width: ${width};
          height: ${height};
          text-decoration: none; /* remove underline if link */
        }

        ${wrapperTag}:hover { transform: scale(1.05); }

        ${wrapperTag}::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${shineColor}, transparent);
          transition: left 0.8s ease;
          z-index: 1;
        }

        ${wrapperTag}:hover::before { left: 100%; }

        span {
          position: relative;
          z-index: 2;
        }

        ::slotted([slot="icon"]) {
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      </style>

      <${wrapperTag} ${hrefAttr}>
        <slot name="icon"></slot>
        <span>${buttonText}</span>
      </${wrapperTag}>
    `;
    }
}

customElements.define("shinny-btn", ShinyButton);
