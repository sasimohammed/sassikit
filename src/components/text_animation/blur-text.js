class BlurText extends HTMLElement {
    static get observedAttributes() {
        return [
            "delay",
            "animate-by",
            "text-color",
            "font-size",
            "font-family",
            "font-weight"
        ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.renderTemplate();
    }

    renderTemplate() {
        const delay = this.getAttribute("delay") || 100;
        const animateBy = this.getAttribute("animate-by") || "letters";
        const textColor = this.getAttribute("text-color") || "#000";
        const fontSize = this.getAttribute("font-size") || "1rem";
        const fontFamily = this.getAttribute("font-family") || "inherit";
        const fontWeight = this.getAttribute("font-weight") || "normal";

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    visibility: hidden;
                }

                :host([ready]) {
                    visibility: visible;
                }

                .blur-text {
                    display: inline-block;
                    overflow: hidden;
                    color: ${textColor};
                    font-size: ${fontSize};
                    font-family: ${fontFamily};
                    font-weight: ${fontWeight};
                }

                .blur-text span {
                    display: inline-block;
                    filter: blur(8px);
                    opacity: 0;
                    transform: translateY(20px);
                    animation: unblur 0.6s forwards;
                }

                @keyframes unblur {
                    to {
                        filter: blur(0);
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
            <div class="blur-text"></div>
        `;

        this.delay = delay;
        this.animateBy = animateBy;
    }

    connectedCallback() {
        this.renderText();
        requestAnimationFrame(() => {
            this.setAttribute("ready", "");
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            // Re-render template if style-related attributes change
            if (["text-color", "font-size", "font-family", "font-weight"].includes(name)) {
                this.renderTemplate();
            }
            this.renderText();
        }
    }

    renderText() {
        const text = this.textContent || "";
        const container = this.shadowRoot.querySelector(".blur-text");
        if (!container) return;

        let elements = [];
        let joinBy = "";

        if (this.animateBy === "letters") {
            elements = text.split("");
        } else if (this.animateBy === "words") {
            elements = text.split(" ").map(word => word + " ");
            joinBy = " ";
        }

        container.innerHTML = elements.map((char, i) =>
            `<span style="animation-delay: ${i * (this.delay / 1000)}s">${
                char === " " ? "&nbsp;" : char
            }</span>`
        ).join(joinBy);
    }
}

customElements.define("blur-text", BlurText);
