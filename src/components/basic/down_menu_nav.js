class MyNavbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Attributes fallback to CSS variables
        const bgColor = this.getAttribute("bg-color") || "var(--nav-bg, #fff)";
        const textColor = this.getAttribute("text-color") || "var(--nav-text, #1e1e2f)";
        const hoverColor = this.getAttribute("hover-color") || "var(--nav-hover, #faba1b)";
        const hoverBg = this.getAttribute("bg-hover") || "var(--nav-hover-bg, rgba(0,0,0,0.03))";
        const logoColor = this.getAttribute("logo-color") || "var(--nav-logo, purple)";
        const shadowColor = this.getAttribute("shadow-color") || "var(--nav-shadow, rgba(0,0,0,0.1))";
        const radius = this.getAttribute("radius") || "var(--nav-radius, 12px)";
        const linkPadding = this.getAttribute("link-padding") || "var(--nav-link-padding, 0.5rem 0.75rem)";
        const fontFamily = this.getAttribute("font-family") || "var(--nav-font, 'Segoe UI', sans-serif)";
        const widthLarge = this.getAttribute("width-large") || "90%";
        const widthSmall = this.getAttribute("width-small") || "95%";
        shadow.innerHTML = `
      <style>
        :host { 
          display: block;  
          position: fixed;
          top: 1rem;
          margin-bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: ${widthLarge};   
          z-index: 999;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${bgColor};
          padding: 1rem 2rem;
          color: ${textColor};
          border-radius: ${radius};
          box-shadow: 0 8px 24px ${shadowColor};
          flex-wrap: wrap;
          animation: slideDown 0.5s ease-out forwards;
        }

        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 16px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: ${fontFamily},serif;
          color: ${logoColor};
        }

        ::slotted([slot="logo-image"]) {
          width: 48px; height: 48px; object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 8px ${shadowColor};
        }

        ::slotted([slot="logo-icon"]) {
          width: 24px; height: 24px; object-fit: contain;
          color: ${logoColor};
        }

        .menu {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0; padding: 0;
        }

        .menu ::slotted(a) {
          text-decoration: none;
          color: ${textColor};
          padding: ${linkPadding};
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: ${fontFamily},serif;
          transition: color 0.3s, transform 0.2s, background 0.3s;
        }

        .menu ::slotted(a:hover) {
          color: ${hoverColor};
          background-color: ${hoverBg};\
       
         
        }

        .menu ::slotted(a.active) {
          color: ${hoverColor};
          border-radius: 8px;
          background-color: ${hoverBg};
        }

        .toggle {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }

        @media (max-width: 768px) {
        nav{
     position: relative;
        
        }
        
        :host{
        width: ${widthSmall};
        }
          .menu {
            flex-direction: column;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.4s ease;
            opacity: 0;
          }

          .menu.open { max-height: 500px; opacity: 1; }
          .toggle { display: block; }
        }
      </style>

      <nav role="navigation">
        <div class="logo-container">
          <slot name="logo-image"></slot>
          <slot name="logo-icon"></slot>
          <div class="logo-text"><slot name="logo">SassiKit</slot></div>
        </div>
        <button class="toggle" aria-label="Toggle navigation menu">☰</button>
        <ul class="menu"><slot name="links"></slot></ul>
      </nav>
    `;

        const toggle = shadow.querySelector(".toggle");
        const menu = shadow.querySelector(".menu");

        // Toggle mobile menu
        toggle.addEventListener("click", () => menu.classList.toggle("open"));

        // Handle active links
        menu.addEventListener("click", (e) => {
            const links = this.querySelectorAll('a[slot="links"]');
            if (e.target.tagName.toLowerCase() === "a") {
                links.forEach(l => l.classList.remove("active"));
                e.target.classList.add("active");
                menu.classList.remove("open");
            }
        });



        // Escape key closes menu
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") menu.classList.remove("open");
        });
    }

    connectedCallback() {

        const style = document.createElement('style');
        style.textContent = `
    html {
      scroll-behavior: smooth;;
    }
  `;
        document.head.appendChild(style);

        }
}

customElements.define("down-nav", MyNavbar);
