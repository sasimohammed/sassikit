class LiquidDotsLoader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Fixed loader size (not user controlled)
        const fixedSize = "100px";

        // User controls only color + shadow color
        const color = this.getAttribute("color") || "#00c6ff";
        const shadowColor = this.getAttribute("shadow-color") || "white";

        // Fixed dot size & count
        const dotSize = "25px";
        const dotCount = 5;

        shadow.innerHTML = `
        <style>
            .loader {
                width: ${fixedSize};
                height: ${fixedSize};
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: url(#gooey);
            }

            .dot {
                position: absolute;
                width: ${dotSize};
                height: ${dotSize};
                border-radius: 50%;
                background: ${color};
                transform: scale(1);
                transition: transform 0.6s ease-in-out;
                box-shadow: 0 0 20px ${shadowColor};
            }

            svg {
                position: absolute;
                width: 0;
                height: 0;
            }
        </style>

        <div class="loader"></div>

        <!-- Gooey Filter -->
        <svg>
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -10" result="gooey" />
                    <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                </filter>
            </defs>
        </svg>
        `;

        const wrapper = shadow.querySelector(".loader");

        // Create dots
        this.dots = [];
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            wrapper.appendChild(dot);
            this.dots.push(dot);
        }

        // Fixed numeric size for calculations
        const sizeNum = parseFloat(fixedSize);

        // Animation loop
        let expanded = false;

        const animate = () => {
            if (expanded) {
                // Merge into center
                this.dots.forEach((dot, i) => {
                    const delay = i * 80;
                    setTimeout(() => {
                        dot.style.transform = `translate(0px, 0px) scale(1.4)`;
                    }, delay);
                });
            } else {
                // Spread into circular formation
                this.dots.forEach((dot, i) => {
                    const angle = (i / this.dots.length) * 2 * Math.PI;
                    const r = sizeNum / 7;
                    const x = Math.cos(angle) * r;
                    const y = Math.sin(angle) * r;
                    dot.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                });
            }
            expanded = !expanded;
        };

        // Run immediately
        animate();
        setInterval(animate, 1200);
    }
}

customElements.define("dots-loader", LiquidDotsLoader);
