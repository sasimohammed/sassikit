class FlipBox extends HTMLElement {
    static get observedAttributes() {
        return ["width", "height", "front-color", "back-color", "border-radius", "flip-direction"];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const width = this.getAttribute("width") || "250px";
        const height = this.getAttribute("height") || "150px";
        const frontColor = this.getAttribute("front-color") || "#1abc9c";
        const backColor = this.getAttribute("back-color") || "#9b59b6";
        const borderRadius = this.getAttribute("border-radius") || "15px";
        const direction = this.getAttribute("flip-direction") || "up";

        let hoverTransform = "rotateY(180deg)";
        let backTransform = "rotateY(180deg)";

        switch(direction.toLowerCase()) {
            case "up":
                hoverTransform = "rotateX(-180deg)";
                backTransform = "rotateX(180deg)";
                break;
            case "down":
                hoverTransform = "rotateX(180deg)";
                backTransform = "rotateX(180deg)";
                break;
            case "left":
                hoverTransform = "rotateY(-180deg)";
                backTransform = "rotateY(180deg)";
                break;
            case "right":
                hoverTransform = "rotateY(180deg)";
                backTransform = "rotateY(180deg)";
                break;
        }

        this.shadow.innerHTML = `
        <style>
            .flip-container { perspective: 1200px; width: ${width}; height: ${height}; }
            .flip-box {
                width: 100%; height: 100%;
                position: relative;
                transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                transform-style: preserve-3d;
            }
            .flip-container:hover .flip-box { transform: ${hoverTransform}; }
            .front, .back {
                position: absolute; width: 100%; height: 100%;
                backface-visibility: hidden;
                border-radius: ${borderRadius};
                display: flex; justify-content: center; align-items: center;
                overflow: hidden;
                color: inherit; font-family: 'Arial', sans-serif; font-weight: bold; font-size: 1.2rem;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                cursor: pointer;
            }
            .front { background-color: ${frontColor}; }
            .back { background-color: ${backColor}; transform: ${backTransform}; }
            ::slotted(img) { max-width: 100%; max-height: 100%; object-fit: cover; border-radius: inherit; }
        </style>
        <div class="flip-container">
            <div class="flip-box">
                <div class="front"><slot name="front"></slot></div>
                <div class="back"><slot name="back"></slot></div>
            </div>
        </div>
    `;
    }

}

customElements.define('flip-box', FlipBox);
