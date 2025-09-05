

class CardStack extends HTMLElement {
    constructor() {
        super();
        this.cardWidth = parseInt(this.getAttribute("card-width") || "250");
        this.cardHeight = parseInt(this.getAttribute("card-height") || "250");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <style>
        .stack-container {
          position: relative;
          perspective: 600px;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          background-color: transparent;
        }
        .card-rotate {
          position: absolute;
          cursor: grab;
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.3s ease;
          top: 0;
          left: 0;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          border-radius: 20px;
        }
        .card {
          border-radius: 20px;
          border: 5px solid white;
          overflow: hidden;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .card img {
          pointer-events: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
        }
        .card-rotate.active {
          cursor: grabbing;
          z-index: 100;
          transition: transform 0.3s ease;
        }
      </style>
      <div class="stack-container"></div>
    `;

        this.container = this.shadowRoot.querySelector(".stack-container");
this.cards=[];
        this.sensitivity = parseInt(this.getAttribute("sensitivity") || "100");
        this.rotationFactor = parseInt(this.getAttribute("rotation-factor") || "4");

        this.currentDraggingCard = null;



    }

    connectedCallback() {
        const images = JSON.parse(this.getAttribute("cards") || "[]");
        this.createCards(images);
    }

    createCards(images){
        this.cards=images.map((src,i)=>{

            const wrapper=document.createElement("div");
            wrapper.classList.add("card-rotate");
            wrapper.style.zIndex=this.cards.length-i;
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.src = src;
            card.appendChild(img);
            wrapper.appendChild(card);

            this.addDragEvents(wrapper,i);
            this.container.appendChild(wrapper);


return wrapper;

        });

        this.updateStackTransforms();

    }

    updateStackTransforms() {
        const maxOffsetX = 40;
        const maxRotation =2;

        const stepX = maxOffsetX / this.cards.length;
        const stepRotation = maxRotation / this.cards.length;

        this.cards.forEach((card, index) => {
            if (card !== this.currentDraggingCard) {
                const offsetX = stepX * (this.cards.length - index - 1);
                const rotateZ = stepRotation * (this.cards.length - index - 1);

                card.style.transform = `
                translateX(${offsetX}px) 
                rotateZ(${rotateZ}deg) 
                translateY(0) 
                rotateX(0deg) 
                rotateY(0deg)
            `;
            }
        });
    }


    addDragEvents(cardEl, cardIndex) {
        let startX, startY, currentX, currentY;

        const onPointerDown = (e) => {
            this.currentDraggingCard = cardEl;
            cardEl.classList.add("active");
            startX = e.clientX;
            startY = e.clientY;
            cardEl.setPointerCapture(e.pointerId);


        };

        const onPointerMove = (e) => {
            if (!this.currentDraggingCard) return;

            currentX = e.clientX - startX;
            currentY = e.clientY - startY;

            const rotateX = (-currentY / 100) * 30;
            const rotateY = (currentX / 100) * 30;

            cardEl.style.transform = `
        translate(${currentX}px, ${currentY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${(this.cards.length - cardIndex - 1) * this.rotationFactor}deg)
      `;
        };

        const onPointerUp = (e) => {
            if (!this.currentDraggingCard) return;

            cardEl.classList.remove("active");
            this.currentDraggingCard = null;

            const offsetX = currentX || 0;
            const offsetY = currentY || 0;
            const distanceMoved = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

            if (distanceMoved > this.sensitivity) {
                this.moveCardToBack(cardEl);
            } else {
                this.updateStackTransforms();
            }
        };

        cardEl.addEventListener("pointerdown", onPointerDown);
        cardEl.addEventListener("pointermove", onPointerMove);
        cardEl.addEventListener("pointerup", onPointerUp);
        cardEl.addEventListener("pointercancel", onPointerUp);
        cardEl.addEventListener("pointerleave", onPointerUp);
    }


    moveCardToBack(cardEl) {
        const index = this.cards.indexOf(cardEl);
        this.cards.splice(index, 1);

        // Push to the end (back of stack)
        this.cards.push(cardEl);

        this.cards.forEach((card, i) => {
            card.style.zIndex = this.cards.length - i;
        });

        this.updateStackTransforms();
    }






}

customElements.define("card-stack", CardStack);
