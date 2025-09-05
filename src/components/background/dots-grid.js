class DotsGridBackground extends HTMLElement {
    static get observedAttributes() {
        return ['bg-color', 'dot-color', 'hover-color', 'spacing', 'dot-radius'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Default settings
        this.bgColor = this.getAttribute('bg-color') || '#111';
        this.dotColor = this.getAttribute('dot-color') || 'rgba(255,255,255,0.1)';
        this.hoverColor = this.getAttribute('hover-color') || 'rgba(0,200,255,0.9)';
        this.spacing = +this.getAttribute('spacing') || 30;
        this.dotRadius = +this.getAttribute('dot-radius') || 2;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%;
                    height: 100%;
                }
                .wrapper {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: ${this.bgColor};
                }
                canvas {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    z-index: 0;
                }
                slot {
                    position: relative;
                    z-index: 1;
                    display: block;
                }
            </style>
            <div class="wrapper">
                <canvas></canvas>
                <slot></slot>
            </div>
        `;

        this.canvas = this.shadowRoot.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this._mouse = { x: null, y: null };

        this._ro = new ResizeObserver(() => this._resize());
        this._grid = [];
    }

    connectedCallback() {
        this._ro.observe(this);
        this.canvas.addEventListener('pointermove', e => {
            this._mouse.x = e.clientX;
            this._mouse.y = e.clientY;
            this._render();
        });
        this.canvas.addEventListener('pointerleave', () => {
            this._mouse.x = null;
            this._mouse.y = null;
            this._render();
        });

        this._resize();
        this._generateGrid();
        this._render();
    }

    disconnectedCallback() {
        this._ro.disconnect();
        cancelAnimationFrame(this._raf);
    }

    attributeChangedCallback(name, _, value) {
        if (value === null) return;
        if (name === 'bg-color') this.shadowRoot.querySelector('.wrapper').style.background = value;
        else if (name === 'dot-color') this.dotColor = value;
        else if (name === 'hover-color') this.hoverColor = value;
        else if (name === 'spacing') this.spacing = +value || this.spacing;
        else if (name === 'dot-radius') this.dotRadius = +value || this.dotRadius;
        this._generateGrid();
        this._render();
    }

    _resize() {
        const w = this.offsetWidth;
        const h = this.offsetHeight;
        const dpr = window.devicePixelRatio || 1;

        this.canvas.width = w * dpr;
        this.canvas.height = h * dpr;
        Object.assign(this.canvas.style, { width: `${w}px`, height: `${h}px` });

        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this._generateGrid();
        this._render();
    }

    _generateGrid() {
        this._grid = [];
        const w = this.canvas.width / (window.devicePixelRatio || 1);
        const h = this.canvas.height / (window.devicePixelRatio || 1);
        for (let y = this.spacing / 2; y < h; y += this.spacing)
            for (let x = this.spacing / 2; x < w; x += this.spacing)
                this._grid.push({ x, y });
    }

    _render = () => {
        const ctx = this.ctx;
        const w = this.canvas.width / (window.devicePixelRatio || 1);
        const h = this.canvas.height / (window.devicePixelRatio || 1);
        ctx.clearRect(0, 0, w, h);

        const hoverRadius = this.spacing * 4;
        for (const p of this._grid) {
            let r = this.dotRadius, color = this.dotColor, drawX = p.x, drawY = p.y;
            if (this._mouse.x != null) {
                const dx = this._mouse.x - p.x;
                const dy = this._mouse.y - p.y;
                const dist = Math.hypot(dx, dy);
                if (dist < hoverRadius) {
                    const t = 1 - dist / hoverRadius;
                    r *= 1 + t * 2.5;
                    color = this.hoverColor;
                    const push = t * this.spacing * 1.5;
                    drawX -= dx / dist * push;
                    drawY -= dy / dist * push;
                }
            }
            ctx.beginPath();
            ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
}

customElements.define('dots-grid-background', DotsGridBackground);
