import '../style.css';

class MyFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Get attributes with defaults
        const bgColor = this.getAttribute("bg-color") || "#2c3e50";
        const textColor = this.getAttribute("text-color") || "#ecf0f1";
        const hoverColor = this.getAttribute("hover-color") || "#faba1b";
        const linkColor = this.getAttribute("link-color") || "#bdc3c7";
        const padding = this.getAttribute("padding") || "2rem";
        const columns = this.getAttribute("columns") || "4";
        const columnGap = this.getAttribute("column-gap") || "2rem";
        const rowGap = this.getAttribute("row-gap") || "1rem";
        const borderTop = this.getAttribute("border-top") || "1px solid rgba(255,255,255,0.1)";
        const socialIconSize = this.getAttribute("social-icon-size") || "1.5rem";
        const socialIconGap = this.getAttribute("social-icon-gap") || "1rem";

        shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .footer {
          background-color: ${bgColor};
          color: ${textColor};
          padding: ${padding};
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${columnGap};
          border-top: ${borderTop};
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: ${rowGap};
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: ${textColor};
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links ::slotted(a) {
          color: ${linkColor};
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links ::slotted(a:hover) {
          color: ${hoverColor};
        }

        .footer-text {
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: ${socialIconGap};
          margin-top: 1rem;
        }

        .social-links ::slotted(a) {
          color: ${linkColor};
          font-size: ${socialIconSize};
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-links ::slotted(a:hover) {
          color: ${hoverColor};
          transform: translateY(-3px);
        }

        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .footer {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <footer class="footer">
        <div class="footer-column">
          <slot name="column-1-title"></slot>
          <div class="footer-links">
            <slot name="column-1-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-2-title"></slot>
          <div class="footer-links">
            <slot name="column-2-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-3-title"></slot>
          <div class="footer-links">
            <slot name="column-3-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-4-title"></slot>
          <div class="footer-text">
            <slot name="column-4-content"></slot>
          </div>
          <div class="social-links">
            <slot name="social-links"></slot>
          </div>
        </div>

        <div class="copyright">
          <slot name="copyright"></slot>
        </div>
      </footer>
    `;
    }
}

customElements.define('footer-layout', MyFooter);