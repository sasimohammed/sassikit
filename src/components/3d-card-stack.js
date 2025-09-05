
class CardSwapComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.cardDistance = parseInt(this.getAttribute('card-distance')) || 60;
        this.verticalDistance = parseInt(this.getAttribute('vertical-distance')) || 70;
        this.delay = parseInt(this.getAttribute('delay')) || 5000;
        this.width = parseInt(this.getAttribute('width')) || 200;
        this.height = parseInt(this.getAttribute('height')) || 300;

        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: ${this.width}px;
          height: ${this.height }px;
          perspective: 900px;
          overflow: visible;
        }
      
        .container {
          position: relative;
          width: auto;
          height: 100%;
         
         
        }
        .card {
  position: absolute;
  top: 100%;
  left: 50%;
  width: ${this.width}px;
  height: ${this.height}px;
  background: white;
  border-radius: 12px;
  border: 4px solid white; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
  transform-style: preserve-3d;
  backface-visibility: hidden;
  cursor: pointer;
  transition: transform 0.8s ease, z-index 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: hidden;
  box-sizing: border-box;
}

.card img {
  width: calc(100% - 20px);  
  height: calc(100% - 20px);
  object-fit: cover;
  border-radius: 10px;        
  border: 10px solid black;    
  pointer-events: none;
  user-select: none;
}

       
      </style>
      <div class="container"></div>
    `;

        this.container = this.shadowRoot.querySelector('.container');
        this.cards = [];
        this.order = [];
        this.intervalId = null;
        this.isAnimating = false;
    }

    connectedCallback() {

        const style = document.createElement('style');
        style.textContent = `
    body {
      overflow: hidden;
    }
  `;
        document.head.appendChild(style);
        const imagesAttr = this.getAttribute('images');
        if (imagesAttr) {
            let images = [];
            try {
                images = JSON.parse(imagesAttr);
            } catch {
                console.warn('Invalid JSON in images attribute');
            }
            this.createCardsFromImages(images);
        } else {
            if (!this.hasChildNodes()) {
                for (let i = 1; i <= 3; i++) {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.textContent = `Card ${i}`;
                    this.container.appendChild(card);
                }
            } else {
                const slotCards = Array.from(this.children);
                slotCards.forEach(card => {
                    card.classList.add('card');
                    this.container.appendChild(card);
                });
                this.innerHTML = '';
            }
        }

        this.cards = Array.from(this.container.querySelectorAll('.card'));
        this.order = this.cards.map((_, i) => i);

        this.placeCards();
        this.startSwap();
    }

    createCardsFromImages(images) {
        images.forEach(src => {
            const card = document.createElement('div');
            card.classList.add('card');
            const img = document.createElement('img');
            img.src = src;
            card.appendChild(img);
            this.container.appendChild(card);
        });
    }

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }

    makeSlot(i) {
        return {
            x: i * this.cardDistance,
            y: -i * this.verticalDistance,
            z: -i * this.cardDistance * 1.5,
            zIndex: this.cards.length - i,
        };
    }

    placeCard(el, slot) {
        el.style.zIndex = slot.zIndex;
        el.style.transform = `translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px) translate(-50%, -50%)`;
    }

    placeCards() {
        this.order.forEach((idx, i) => {
            const card = this.cards[idx];
            const slot = this.makeSlot(i);
            this.placeCard(card, slot);
        });
    }
    swap() {
        if (this.isAnimating || this.order.length < 2) return;
        this.isAnimating = true;

        const frontIndex = this.order[0];
        const frontCard = this.cards[frontIndex];

        // 1. Immediately update z-index for all cards (no transition)
        this.order.forEach((idx, i) => {
            this.cards[idx].style.transition = 'transform 0.8s ease';
            this.cards[idx].style.zIndex = this.cards.length - i;
        });

        // 2. Move front card down and fade out
        frontCard.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        frontCard.style.transform = `translate3d(${this.makeSlot(0).x}px, 500px, ${this.makeSlot(0).z}px) translate(-50%, -50%)`;
        frontCard.style.opacity = '0';

        setTimeout(() => {
            // 3. Reorder the stack
            this.order.shift();
            this.order.push(frontIndex);

            // 4. Prepare front card to come back from bottom
            const lastSlot = this.makeSlot(this.cards.length - 1);
            frontCard.style.transition = 'none';
            frontCard.style.transform = `translate3d(${lastSlot.x}px, 500px, ${lastSlot.z}px) translate(-50%, -50%)`;
            frontCard.style.opacity = '0';

            // 5. Immediately update z-index again
            this.order.forEach((idx, i) => {
                this.cards[idx].style.zIndex = this.cards.length - i;
            });

            setTimeout(() => {
                // 6. Animate all cards to new positions
                frontCard.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
                frontCard.style.transform = `translate3d(${lastSlot.x}px, ${lastSlot.y}px, ${lastSlot.z}px) translate(-50%, -50%)`;
                frontCard.style.opacity = '1';

                this.order.slice(0, -1).forEach((idx, i) => {
                    const slot = this.makeSlot(i);
                    this.placeCard(this.cards[idx], slot);
                });

                setTimeout(() => {
                    this.isAnimating = false;
                    // Reset transitions
                    this.cards.forEach(card => {
                        card.style.transition = 'transform 0.8s ease, z-index 0s ease';
                    });
                }, 800);
            }, 20);
        }, 800);
    }


    startSwap() {
        this.intervalId = setInterval(() => this.swap(), this.delay);
    }
}

customElements.define('card-swap', CardSwapComponent);

