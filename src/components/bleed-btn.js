class BleedBtn extends HTMLElement {
    static get observedAttributes() {
        return [
            "liquid-color",
            "text-color",
            "href",
            "width",
            "font-size",
            "font-weight",
            "font-family"
        ];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.currentLiquidColor = this.getAttribute("liquid-color") || "red";
        this.render();
    }

    render() {
        const btnColor = this.currentLiquidColor;
        const textColor = this.getAttribute("text-color") || "white";
        const width = this.getAttribute("width") || "200px";
        const fontSize = this.getAttribute("font-size") || "1.5em";
        const fontWeight = this.getAttribute("font-weight") || "bold";
        const fontFamily = this.getAttribute("font-family") || "Arial, sans-serif";
        const href = this.getAttribute("href") || "#";

        this.shadow.innerHTML = `
            <style>
                a {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }
                
                span {
                    position: absolute;
                    color: ${textColor};
                    font-size: ${fontSize};
                    font-weight: ${fontWeight};
                    font-family: ${fontFamily}, serif;
                    background-color: ${btnColor};
                    transition: 0.3s ease;
                    padding: 15px 25px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    z-index: 33;
                }
                
                a:hover span {
                    background-color: ${btnColor};
                    color: ${textColor};
                }
                
                .box {
                    position: relative;
                    height: 60px;
                    width: ${width};
                    background-color: ${btnColor};
                    border-radius: 10px;
                    transition: 0.5s;
                    filter: url(#gooey);
                    overflow: visible;
                }
                
                .particle {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: ${btnColor};
                    border-radius: 50%;
                    pointer-events: none;
                    left: 50%;
                    top: 50%;
                }
                
                svg {
                    display: none;
                }
            </style>
            
            <svg>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feColorMatrix values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 50 -10" />
                </filter>
            </svg>
            
            <a id="btn-link" href="${href}">
                <div class="box" id="box"></div>
                <span id="btn-text"><slot>Button</slot></span>
            </a>
        `;

        this.box = this.shadow.querySelector('#box');
        this.link = this.shadow.querySelector('#btn-link');
        this.text = this.shadow.querySelector('#btn-text');

        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                this.createParticle();
            }
        }, 150);
    }

    createParticle() {
        let particle = document.createElement("div");
        particle.classList.add('particle');
        particle.style.backgroundColor = this.currentLiquidColor;

        let angle = Math.random() * 2 * Math.PI;
        let distance = 150 + Math.random() * 100;
        let targetX = Math.cos(angle) * distance;
        let targetY = Math.sin(angle) * distance;

        this.box.appendChild(particle);

        this.animateParticle(particle, targetX, targetY);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1700);
    }

    animateParticle(particle, targetX, targetY) {
        particle.animate(
            [
                { transform: "translate(0, 0) scale(1)" },
                { transform: `translate(${targetX}px, ${targetY}px) scale(0.5)` }
            ],
            {
                duration: 1700,
                easing: "linear",
                fill: "forwards"
            }
        );
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case "font-size":
                this.text.style.fontSize = newValue;
                break;
            case "font-weight":
                this.text.style.fontWeight = newValue;
                break;
            case "font-family":
                this.text.style.fontFamily = newValue;
                break;
            case "text-color":
                this.text.style.color = newValue;
                break;
            case "width":
                this.box.style.width = newValue;
                break;
            case "liquid-color":
                this.currentLiquidColor = newValue;
                this.box.style.backgroundColor = newValue;
                this.text.style.backgroundColor = newValue;
                break;
            case "href":
                this.link.href = newValue;
                break;
        }
    }
}

customElements.define('bleed-btn', BleedBtn);
