class PixelTransition extends HTMLElement {
    static get observedAttributes() {
        return ["grid-size", "pixel-color", "pixels-per-second", "width", "height"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.gridSize = parseInt(this.getAttribute("grid-size")) || 12;
        this.pixelColor = this.getAttribute("pixel-color") || "#ffffff";
        this.pixelsPerSecond = parseInt(this.getAttribute("pixels-per-second")) || 100;
        this.width = this.getAttribute("width") || "100%";
        this.height = this.getAttribute("height") || "auto";
        this.stepDuration = 0.05;

        this.shadowRoot.innerHTML = `
     <style>
  :host {
    display: block;
    position: relative;
    width: ${this.width};
    height: ${this.height};
    max-width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }
  :host(:hover) {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: inherit;
  }
  .overlay.show {
    opacity: 1;
  }
</style>
      
      <canvas></canvas>
      <div class="overlay"><slot name="image-layer"></slot></div>
    `;

        this.canvas = this.shadowRoot.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.overlay = this.shadowRoot.querySelector(".overlay");
        this.image = new Image();
        this.image.crossOrigin = "anonymous";
        this.animationId = null;
        this.cells = [];
        this.pixelsToChangePerStep = 0;
        this.lastTimestamp = 0;
    }

    connectedCallback() {
        const image_tag = this.querySelector('[slot="image"]');
        if (image_tag && image_tag.tagName === "IMG") {
            this.image.src = image_tag.src;

            this.image.onload = () => {
                this.drawImage();
                this.myGrid();
            };
        }

        this.addEventListener("mouseenter", () => this.startTransition());
        this.addEventListener("mouseleave", () => this.reset());
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (name === "grid-size") {
            this.gridSize = parseInt(newValue) || 12;
            this.myGrid();
            this.reset();
        }

        if (name === "pixel-color") {
            this.pixelColor = newValue || "#ffffff";
        }

        if (name === "pixels-per-second") {
            this.pixelsPerSecond = parseInt(newValue) || 100;
            this.pixelsToChangePerStep = Math.max(
                1,
                Math.floor(this.pixelsPerSecond * this.stepDuration)
            );
        }

        if (name === "width" || name === "height") {
            this[name] = newValue || (name === "width" ? "100%" : "auto");
            this.style[name] = this[name];
            this.drawImage();
            this.myGrid();
        }
    }

    drawImage() {
        if (!this.image.complete) return;

        // If user set pixel width/height -> use those
        let w = this.getAttribute("width");
        let h = this.getAttribute("height");

        if (w && w.includes("px")) {
            this.canvas.width = parseInt(w);
        } else {
            this.canvas.width = this.image.naturalWidth;
        }

        if (h && h.includes("px")) {
            this.canvas.height = parseInt(h);
        } else {
            this.canvas.height = this.image.naturalHeight;
        }

        this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    }

    myGrid() {
        if (!this.canvas.width || !this.canvas.height) return;

        const cellw = this.canvas.width / this.gridSize;
        const cellh = this.canvas.height / this.gridSize;
        this.cells = [];
        for (let row = 0; row < this.gridSize; row++) {
            for (let col = 0; col < this.gridSize; col++) {
                this.cells.push({
                    x: col * cellw,
                    y: row * cellh,
                    changed: false,
                });
            }
        }

        this.cells = this.cells.sort(() => Math.random() - 0.5);

        this.pixelsToChangePerStep = Math.max(
            1,
            Math.floor(this.pixelsPerSecond * this.stepDuration)
        );
    }

    startTransition() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        let changedCount = 0;
        const totalCells = this.gridSize * this.gridSize;

        const animate = (timestamp) => {
            if (!this.lastTimestamp) {
                this.lastTimestamp = timestamp;
            }

            const elapsed = timestamp - this.lastTimestamp;

            if (elapsed >= this.stepDuration * 1000) {
                this.lastTimestamp = timestamp;

                let pixelsChangedThisFrame = 0;
                const cellW = this.canvas.width / this.gridSize;
                const cellH = this.canvas.height / this.gridSize;

                for (
                    let i = 0;
                    i < this.cells.length &&
                    pixelsChangedThisFrame < this.pixelsToChangePerStep;
                    i++
                ) {
                    if (!this.cells[i].changed) {
                        this.ctx.fillStyle = this.pixelColor;
                        this.ctx.fillRect(
                            this.cells[i].x,
                            this.cells[i].y,
                            cellW,
                            cellH
                        );
                        this.cells[i].changed = true;
                        changedCount++;
                        pixelsChangedThisFrame++;
                    }
                }

                if (changedCount >= totalCells) {
                    this.overlay.classList.add("show");
                    return;
                }
            }

            this.animationId = requestAnimationFrame(animate);
        };

        this.animationId = requestAnimationFrame(animate);
    }

    reset() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        this.overlay.classList.remove("show");
        this.lastTimestamp = 0;

        this.cells.forEach((cell) => (cell.changed = false));
        this.drawImage();
    }
}

customElements.define("img-transition", PixelTransition);
