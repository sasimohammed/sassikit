class FuzzyText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const canvas = document.createElement("canvas");
        this.canvas = canvas;
        this.shadowRoot.appendChild(canvas);
    }

    connectedCallback() {
        this.renderFuzzyEffect();
    }

    disconnectedCallback() {
        cancelAnimationFrame(this.frameId);
        this.cleanupListeners();
    }

    renderFuzzyEffect() {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        const text = this.getAttribute("text") || this.textContent || "Hello!";
        const color = this.getAttribute("color") || "#fff";
        const fontSize = this.getAttribute("font-size") || "5rem";
        const fontWeight = this.getAttribute("font-weight") || "900";
        const fontFamily = this.getAttribute("font-family") || "monospace";
        const baseIntensity = parseFloat(this.getAttribute("base-intensity") || "0.3");
        const hoverIntensity = parseFloat(this.getAttribute("hover-intensity") || "0.5");
        const enableHover = this.hasAttribute("enable-hover");
        let isHovering = false;

        const offscreen = document.createElement("canvas");
        const offCtx = offscreen.getContext("2d");

        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = parseFloat(getComputedStyle(temp).fontSize);
        document.body.removeChild(temp);

        const style = `${fontWeight} ${fontSize} ${fontFamily}`;
        offCtx.font = style;
        offCtx.textBaseline = "alphabetic";

        const metrics = offCtx.measureText(text);
        const ascent = metrics.actualBoundingBoxAscent || computedSize;
        const descent = metrics.actualBoundingBoxDescent || computedSize * 0.2;
        const width = Math.ceil(metrics.width);
        const height = Math.ceil(ascent + descent);

        offscreen.width = width;
        offscreen.height = height;

        offCtx.font = style;
        offCtx.fillStyle = color;
        offCtx.fillText(text, 0, ascent);//fillText(text, x, y) have the start point

        const margin = 50;
        canvas.width = width + margin * 2;//the same of the original width but with space to move  left and right
        canvas.height = height;

        ctx.translate(margin, 0);

        const draw = () => {
            ctx.clearRect(-margin, 0, canvas.width, canvas.height);
            const intensity = isHovering ? hoverIntensity : baseIntensity;
            const fuzzRange = 30;

            for (let j = 0; j < height; j++) {
                const dx = Math.floor((Math.random() - 0.5) * fuzzRange * intensity);
                ctx.drawImage(offscreen, 0, j, width, 1, dx, j, width, 1);
            }

            this.frameId = requestAnimationFrame(draw);
        };

        draw();

        const isInside = (x, y) =>
            x >= margin &&
            x <= margin + width &&
            y >= 0 &&
            y <= height;

        const onMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            isHovering = isInside(x, y);
        };

        const onMouseLeave = () => (isHovering = false);

        if (enableHover) {
            canvas.addEventListener("mousemove", onMouseMove);
            canvas.addEventListener("mouseleave", onMouseLeave);
            this._cleanup = () => {
                canvas.removeEventListener("mousemove", onMouseMove);
                canvas.removeEventListener("mouseleave", onMouseLeave);
            };
        }
    }

    cleanupListeners() {
        if (this._cleanup) this._cleanup();
    }
}

customElements.define("fuzzy-text", FuzzyText);
