class Thimg extends HTMLElement {
    static get observedAttributes() {
        return [
            "bg-color",
            "border-radius",
            "shadow",
            "padding",
            "min-height",
            "main-height",
            "thumb-size",
            "container-width"
        ];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: var(--container-width, 100%);
          max-width: 100%;
          margin: 0 auto;
          visibility: hidden;
          font-family: "Segoe UI", sans-serif;
        }
        :host([ready]) {
          visibility: visible;
        }

        .th-container {
          width: 100%;
          height: auto;
          min-height: var(--min-height, 500px);
          background: var(--bg-color, #ffffff);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--padding, 20px);
          box-sizing: border-box;
          border-radius: var(--border-radius, 20px);
          box-shadow: var(--shadow, 0 6px 20px rgba(0,0,0,0.1));
          transition: all 0.3s ease;
        }

        .th-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.15);
        }

        .l-img {
          width: var(--main-width, 100%);
         
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          border-radius: var(--border-radius, 20px);
          overflow: hidden;
          border: 1px solid #ddd;
        
        }

        .l-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .l-img img:hover {
          transform: scale(1.03);
        }

        .s-img-container {
       
          width: 95%;
          overflow-x: auto;
          padding: 10px 5px;
          box-sizing: border-box;
          display: flex;
          justify-content: start;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        
          -ms-overflow-style: none;
        }
        .s-img-container::-webkit-scrollbar {
          display: none; 
        }

        .s-img {
          display: flex;
          gap: 14px;
          border-radius: 20px;
         
      
        }

        ::slotted(img) {
          width: var(--thumb-size, 80px);
          height: var(--thumb-size, 80px);
          min-width: var(--thumb-size, 80px);
          object-fit: cover;
          cursor: pointer;
          border: 2px solid #e0e0e0;
          transition: all 0.3s ease;
          border-radius: var(--border-radius, 14px);
          background-color: #fafafa;
          position: relative;
          scroll-snap-align: center;
        }

        ::slotted(img:hover) {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-color: #bbb;
        }

        ::slotted(img.active) {
          border-color: #0078ff;
          box-shadow: 0 4px 12px rgba(0,120,255,0.2);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .th-container {
            padding: 15px;
            min-height: 400px;
          }

          .l-img {
            height: 280px;
          }

          ::slotted(img) {
            width: 70px;
            height: 70px;
            min-width: 70px;
          }
        }

        @media (max-width: 480px) {
          .th-container {
            padding: 12px;
            min-height: 320px;
          }

          .l-img {
            height: 220px;
            margin-bottom: 15px;
          }

          ::slotted(img) {
            width: 60px;
            height: 60px;
            min-width: 60px;
          }
        }
      </style>

      <div class="th-container">
        <div class="l-img">
          <img id="main-img" src="" alt="Preview" />
        </div>

        <div class="s-img-container">
          <div class="s-img">
            <slot name="s-img"></slot>
          </div>
        </div>
      </div>
    `;

        // Thumbnail click handler
        this.addEventListener("click", (e) => {
            if (e.target.tagName === "IMG" && e.target.slot === "s-img") {
                const mainImg = shadow.getElementById("main-img");
                mainImg.src = e.target.src;

                this.querySelectorAll('img[slot="s-img"]').forEach((img) => {
                    img.classList.remove("active");
                });
                e.target.classList.add("active");
            }
        });

        // Initialize with first image
        setTimeout(() => {
            const firstImg = this.querySelector('img[slot="s-img"]');
            if (firstImg) {
                firstImg.classList.add("active");
                shadow.getElementById("main-img").src = firstImg.src;
            }
            this.setAttribute("ready", "");
        }, 0);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.shadowRoot) return;

        const root = this.shadowRoot.querySelector(".th-container");
        const preview = this.shadowRoot.querySelector(".l-img");

        switch (name) {
            case "bg-color":
                root.style.backgroundColor = newValue || "#ffffff";
                break;
            case "border-radius":
                root.style.borderRadius = newValue || "20px";
                break;
            case "shadow":
                root.style.boxShadow = newValue || "0 6px 20px rgba(0,0,0,0.1)";
                break;
            case "padding":
                root.style.padding = newValue || "20px";
                break;
            case "min-height":
                root.style.minHeight = newValue || "500px";
                break;
            case "main-height":
                preview.style.height = newValue || "350px";
                break;
            case "container-width":
                this.style.setProperty("--container-width", newValue || "100%");
                break;
            case "thumb-size":
                this.style.setProperty("--thumb-size", newValue || "80px");
                break;
        }
    }
}

customElements.define("th-img", Thimg);
