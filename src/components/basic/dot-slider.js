class DotSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;
        const slides = this.querySelectorAll("[slot='slide']");

        const columns = parseInt(this.getAttribute('columns') || '2');
        const rows = parseInt(this.getAttribute('rows') || '2');
        const slidesPerView = columns * rows;
        const cardWidth = parseInt(this.getAttribute('card-width') || '200');
        const gapSize = parseInt(this.getAttribute('gap') || '12');

        // Calculate total height including dots container
        const contentHeight = (cardWidth * rows) + (gapSize * (rows - 1));
        const totalHeight = contentHeight + 30; // 30px for dots container and margin

        shadow.innerHTML = `
      <style>
        .dot-slider {
          height: ${totalHeight}px;
          margin: auto;
          display: flex;
          flex-direction: column;
          background-color: transparent;
          border-radius: 8px;
          box-sizing: border-box;
          width: ${(cardWidth * columns) + (gapSize * (columns - 1))}px;
        }

        .content-wrapper {
          width: 100%;
          height: ${contentHeight}px;
          margin: auto;
          overflow: hidden;
          position: relative;
        }

        .content {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }

        .slide-group {
          flex: 0 0 100%;
          display: grid;
          grid-template-columns: repeat(${columns}, ${cardWidth}px);
          grid-template-rows: repeat(${rows}, ${cardWidth}px);
          gap: ${gapSize}px;
          box-sizing: border-box;
        }

        ::slotted([slot='slide']) {
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${cardWidth}px;
          height: ${cardWidth}px;
        }

        ::slotted([slot='slide']:hover) {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          gap: 10px;
          height: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .dot.active {
          background-color: #3a157f;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .dot-slider {
            width: ${(cardWidth * 2) + gapSize}px;
            height: ${(cardWidth * rows) + (gapSize * (rows - 1)) + 30}px;
          }
          
          .slide-group {
            grid-template-columns: repeat(2, ${cardWidth}px);
          }
        }

        @media (max-width: 480px) {
          .dot-slider {
            width: ${cardWidth}px;
            height: ${(cardWidth * rows) + (gapSize * (rows - 1)) + 30}px;
          }
          
          .slide-group {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="dot-slider">
        <div class="content-wrapper">
          <div class="content"></div>
        </div>
        <div class="dots-container"></div>
      </div>
    `;

        const content = shadow.querySelector(".content");
        const dotsContainer = shadow.querySelector(".dots-container");
        const slideElements = Array.from(slides);
        let currentIndex = 0;

        const totalGroups = Math.ceil(slideElements.length / slidesPerView);

        for (let i = 0; i < totalGroups; i++) {
            const group = document.createElement("div");
            group.className = "slide-group";

            const startIndex = i * slidesPerView;
            const endIndex = startIndex + slidesPerView;

            for (let j = startIndex; j < endIndex && j < slideElements.length; j++) {
                const slide = slideElements[j].cloneNode(true);
                group.appendChild(slide);
            }

            content.appendChild(group);
        }

        for (let i = 0; i < totalGroups; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");

            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        const goToSlide = (groupIndex) => {
            currentIndex = groupIndex;
            const translateX = -groupIndex * 100;
            content.style.transform = `translateX(${translateX}%)`;

            shadow.querySelectorAll(".dot").forEach((dot, idx) => {
                dot.classList.toggle("active", idx === groupIndex);
            });
        };

        goToSlide(0);
    }
}

customElements.define("dot-slider", DotSlider);