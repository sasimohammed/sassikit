class ParticleBackground extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.bgColor = this.getAttribute("bg-color") || "#000000";
        this.circleColor = this.getAttribute("circle-color") || "rgba(255,255,255,0.7)";

        const template = document.createElement("template");
        template.innerHTML = `
        <style>
            :host {
                display: block;
                position: fixed; 
                top: 0;
                left: 0;
                width: 100vw; 
                height: 100vh; 
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                z-index: 0; 
            }
            
            .wrapper{
                position: relative;
                width: 100%;
                height: 100%;
                background-color: ${this.bgColor};
            }

            canvas{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: block;
                z-index: 0;
            }

            slot{
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
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.canvas = this.shadowRoot.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.circles = [];
        this.mouse = { x: null, y: null };
        this.animationId = null;
    }

    resize() {
        const oldWidth = this.canvas.width;
        const oldHeight = this.canvas.height;

        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;

        const newWidth = this.canvas.width;
        const newHeight = this.canvas.height;

        this.circles.forEach(p => {
            p.x = (p.x / oldWidth) * newWidth;
            p.y = (p.y / oldHeight) * newHeight;
        });
    }

    initcircles() {
        const circlesnum = 50;
        this.circles = [];
        for (let i = 0; i < circlesnum; i++) {
            this.circles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 2,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5
            });
        }
    }

    connectedCallback() {
        this.resize();
        window.addEventListener("resize", () => this.resize());

        window.addEventListener("mousemove", e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.initcircles();
        this.animate();
    }

    animate() {
        const ctx = this.ctx;
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;

        ctx.clearRect(0, 0, width, height);

        this.circles.forEach(c => {
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - c.x;
                const dy = this.mouse.y - c.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    c.x -= dx / dist;
                    c.y -= dy / dist;
                }
            }

            c.x += c.dx;
            c.y += c.dy;

            if (c.x < 0) c.x = width;
            if (c.x > width) c.x = 0;
            if (c.y < 0) c.y = height;
            if (c.y > height) c.y = 0;

            ctx.beginPath();
            ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.circleColor;
            ctx.fill();
        });

        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (name === 'bg-color') {
            this.bgColor = newValue;
            this.shadowRoot.querySelector('.wrapper').style.backgroundColor = newValue;
        } else if (name === 'circle-color') {
            this.circleColor = newValue;
        }
    }

    disconnectedCallback() {
        cancelAnimationFrame(this.animationId);
    }
}

customElements.define("particle-background", ParticleBackground);
