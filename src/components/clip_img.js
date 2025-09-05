class ClipImage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const img1 = this.getAttribute("image1") || "";
        const img2 = this.getAttribute("image2") || "";
        const width = this.getAttribute("width") || "600px";
        const height = this.getAttribute("height") || "400px";
        const borderType = this.getAttribute("border") || "2px solid black"; // default

        shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          overflow: hidden;
        }
        .container {
          position: relative;
          width: ${width};
          height: ${height};
          border: ${borderType};
          border-radius: 8px; 
        }
        .container .box {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
        }
        .container .box:nth-child(1) {
          background-image: url("${img1}");
        }
        .container .box:nth-child(2) {
          background-image: url("${img2}");
          z-index: 2;
          transition: clip-path 0.5s ease;
          clip-path: polygon(0 0, 100% 0, 51% 51%, 0 100%);
        }
        .container .box:nth-child(2):hover {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        .container .box:nth-child(1):hover ~ .box:nth-child(2) {
          clip-path: polygon(0 0, 100% 0, 0 0, 0 100%);
        }
      </style>
      <div class="container">
        <div class="box"></div>
        <div class="box"></div>
      </div>
    `;
    }
}

customElements.define('clip-image', ClipImage);
