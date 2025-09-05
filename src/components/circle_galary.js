class Circle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const images = JSON.parse(this.getAttribute("cards") || "[]");
        const cardCount = images.length;
        const angle = 360 / cardCount;

        const size = this.getAttribute("size") || "200"; // user can control size

        const cardWidth = size *0.85;
        const radius = (cardWidth * cardCount) / (2 * Math.PI);


        const cardsHTML = images.map((src, i) => `
    <div class="card" style="transform: rotateY(${i * angle}deg) translateZ(${radius}px);">
        <div class="card-inner">
            <img src="${src}" alt="card ${i}">
            <div class="border-outer"></div>
            <div class="border-inner"></div>
        </div>
    </div>
`).join('');

        shadow.innerHTML = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            .image-container {
                position: relative;
                width: ${size * 0.8}px;
                height: ${size * 0.8}px;
                transform-style: preserve-3d;
                transform: perspective(1200px);
                cursor: grab;
            }
            .card {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                
               
                justify-content: center;
                align-items: center;
            }
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                
                border-radius: 20px;
                overflow: hidden;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(8px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .card-inner:hover {
                transform: scale(1.05);
                box-shadow: 0 15px 40px rgba(0,0,0,0.5);
            }
            .card-inner img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 20px;
            }
            .border-outer {
                position: absolute;
                inset: 0;
                border: 2px solid rgba(255, 255, 255, 0.4);
                border-radius: 20px;
                pointer-events: none;
            }
            .border-inner {
                position: absolute;
                inset: 10px;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 15px;
                pointer-events: none;
            }
        </style>
        <div class="image-container">
            ${cardsHTML}
        </div>
        `;

        const container = shadow.querySelector('.image-container');
        let rotationY = 0;
        let isDragging = false;
        let speed = 0.2;

        const spin = () => {
            if (!isDragging) {
                rotationY += speed;
                container.style.transform = `perspective(1200px) rotateY(${rotationY}deg)`;
            }
            requestAnimationFrame(spin);
        };
        spin();
    }
}

customElements.define('circle-gallery', Circle);
