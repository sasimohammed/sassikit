class CounterText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });


        const start = parseFloat(this.getAttribute('start') || '0');
        const end = parseFloat(this.getAttribute('end') || '100');
        const decimals = parseInt(this.getAttribute('decimals') || '0');
        const durationInSeconds = parseFloat(this.getAttribute('duration') || '2');
        const duration = durationInSeconds * 1000;
        const fontSize = this.getAttribute('font-size') || 'inherit';
        const fontWeight = this.getAttribute('font-weight') || 'normal';
        const color = this.getAttribute('color') || 'inherit';
        const fontFamily = this.getAttribute('font-family') || 'inherit';


        shadow.innerHTML = `
        <style>
            :host {
                display: inline-block;
            }
            .counter {
                font-size: ${fontSize};
                font-weight: ${fontWeight};
                color: ${color};
                font-family: ${fontFamily}, serif;
                display: inline-block;
                transition: transform 0.2s ease;
            }
        </style>
        <span class="counter">${start.toFixed(decimals)}</span>
        `;

        const counterEl = shadow.querySelector('.counter');


        const easeOutQuad = (t) => t * (2 - t);

        const animateValue = () => {
            if (start === end) return;

            const startTime = performance.now();

            const updateCounter = (timestamp) => {
                let progress = Math.min((timestamp - startTime) / duration, 1);
                progress = easeOutQuad(progress);

                const value = start + (end - start) * progress;
                counterEl.textContent = value.toFixed(decimals);


                if (progress < 0.3) {
                    counterEl.style.transform = 'scale(1.1)';
                } else {
                    counterEl.style.transform = 'scale(1)';
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        };


        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateValue();
                observer.disconnect();
            }
        });
        observer.observe(this);
    }
}

customElements.define('counter-text', CounterText);
