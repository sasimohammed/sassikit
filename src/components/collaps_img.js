class PixelCollapseCard extends HTMLElement {
    static get observedAttributes() {
        return ["src", "width", "border-color", "border-radius", "border-width"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.src = this.getAttribute("src") || "";
        this.width = this.getAttribute("width") || "400px"; // user-defined, default 400px
        this.borderColor = this.getAttribute("border-color") || "#ddd";
        this.borderRadius = this.getAttribute("border-radius") || "16px";
        this.borderWidth = this.getAttribute("border-width") || "2px";
        this.tileSize = 20;
        this.scaleFactor = 2;
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === "src") this.src = newValue;
            if (name === "width") this.width = newValue;
            if (name === "border-color") this.borderColor = newValue;
            if (name === "border-radius") this.borderRadius = newValue;
            if (name === "border-width") this.borderWidth = newValue;
            this.render();
        }
    }

    render() {
        // Ensure user width does not exceed 400px
        const numericWidth = parseInt(this.width);
        const appliedWidth = Math.min(numericWidth, 400) + "px";

        this.shadowRoot.innerHTML = `
        <style>
            :host { 
                display: block; 
                width: ${appliedWidth}; 
                max-width: 400px; 
            }
            .wrapper {
                display: block;
                border: ${this.borderWidth} solid ${this.borderColor};
                border-radius: ${this.borderRadius};
                overflow: hidden;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                transition: border-color 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            }
            .wrapper:hover {
                border-color: #aaa;
                box-shadow: 0 6px 16px rgba(0,0,0,0.2);
            }
            .grid {
                display: grid;
                position: relative;
                gap: 0;
                user-select: none;
                line-height: 0;
                overflow: hidden;
                background: transparent;
            }
            canvas.tile {
                display: block;
                background: transparent;
                transition: transform 0.6s ease, opacity 0.6s ease;
                will-change: transform, opacity;
                transform: translate(0,0) rotate(0) scale(1);
                opacity: 1;
                image-rendering: crisp-edges;
            }
        </style>
        <div class="wrapper">
            <div class="grid"></div>
        </div>
        `;

        const grid = this.shadowRoot.querySelector(".grid");
        grid.innerHTML = "";

        const img = new Image();
        img.src = this.src;

        img.onload = () => {
            const cols = Math.floor(img.width / this.tileSize);
            const rows = Math.floor(img.height / this.tileSize);
            const cardWidthPx = parseInt(appliedWidth);
            const scale = cardWidthPx / img.width;

            grid.style.aspectRatio = `${img.width} / ${img.height}`;
            grid.style.gridTemplateColumns = `repeat(${cols}, ${Math.round(this.tileSize * scale)}px)`;
            grid.style.gridTemplateRows = `repeat(${rows}, ${Math.round(this.tileSize * scale)}px)`;

            const offCanvas = document.createElement("canvas");
            offCanvas.width = img.width;
            offCanvas.height = img.height;
            const offCtx = offCanvas.getContext("2d");
            offCtx.drawImage(img, 0, 0);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const canvas = document.createElement("canvas");
                    canvas.className = "tile";
                    canvas.width = this.tileSize * this.scaleFactor;
                    canvas.height = this.tileSize * this.scaleFactor;

                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(
                        offCanvas,
                        c * this.tileSize, r * this.tileSize, this.tileSize, this.tileSize,
                        0, 0, canvas.width, canvas.height
                    );

                    canvas.style.width = Math.round(this.tileSize * scale) + "px";
                    canvas.style.height = Math.round(this.tileSize * scale) + "px";

                    const dx = (Math.random() - 0.5) * 200;
                    const dy = (Math.random() - 0.5) * 200;
                    const dr = (Math.random() - 0.5) * 90;
                    canvas.dataset.x = dx.toFixed(2);
                    canvas.dataset.y = dy.toFixed(2);
                    canvas.dataset.r = dr.toFixed(2);

                    grid.appendChild(canvas);
                }
            }

            const scatter = () => {
                grid.querySelectorAll(".tile").forEach(tile => {
                    tile.style.transform = `translate(${tile.dataset.x}px, ${tile.dataset.y}px) rotate(${tile.dataset.r}deg) scale(0.8)`;
                    tile.style.opacity = "0.4";
                });
            };

            const gather = () => {
                grid.querySelectorAll(".tile").forEach(tile => {
                    tile.style.transform = "translate(0, 0) rotate(0) scale(1)";
                    tile.style.opacity = "1";
                });
            };

            grid.addEventListener("pointerenter", scatter);
            grid.addEventListener("pointerleave", gather);
            gather();
        };

        img.onerror = () => {
            grid.textContent = "Image failed to load.";
        };
    }
}

customElements.define("pixel-collapse-card", PixelCollapseCard);
