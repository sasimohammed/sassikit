class Slider extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Get all customizable attributes with defaults
        const bgColor = this.getAttribute('bg-color') || 'white';
        const itemBgColor = this.getAttribute('item-bg-color') || 'white';
        const arrowBgColor = this.getAttribute('arrow-bg-color') || 'white';
        const arrowColor = this.getAttribute('arrow-color') || 'black';
        const controllerBgColor = this.getAttribute('controller-bg-color') || 'transparent';
        const itemWidth = this.getAttribute('item-width') || '200px';
        const itemHeight = this.getAttribute('item-height') || '150px';
        const sliderHeight = this.getAttribute('slider-height') || '30vh';
        const arrowSize = this.getAttribute('arrow-size') || '20px';
        const itemGap = this.getAttribute('item-gap') || '10px';
        const borderRadius = this.getAttribute('border-radius') || '8px';
        const scrollAmount = parseInt(itemWidth) + parseInt(itemGap);

        shadow.innerHTML = `
        <style>
            :host { 
                display: block;
                position: relative;
            }

            .slider-container {
                width: 98%;
                background-color: ${bgColor};
                height: ${sliderHeight};
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: start;
                padding: 18px;
            }

            .controller {
                display: flex;
                gap: ${itemGap};
                flex-direction: row;
                background-color: ${controllerBgColor};
                margin-bottom: 10px;
                padding: 5px;
                border-radius: ${borderRadius};
            }
            
            .arrow {
                background: ${arrowBgColor};
                border: none;
                padding: 10px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .arrow:hover {
                transform: scale(1.05);
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
            }
            
            .arrow svg {
                width: ${arrowSize};
                height: ${arrowSize};
                fill: ${arrowColor};
            }
            
            .slider {
            
                display: flex;
                width: 100%;
                margin: auto;
                flex-direction: row;
                gap: ${itemGap};
                flex-shrink: 0;
                justify-content: start;
                align-items: start;
                overflow-x: auto;
                scroll-behavior: smooth;
                scroll-snap-type: x mandatory;
                padding-bottom: 10px;
            }

            .slider::-webkit-scrollbar {
                display: none;
            }

            ::slotted([slot="slider-item"]) {
                width: ${itemWidth};
                height: ${itemHeight};
                background: ${itemBgColor};
                margin: 5px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: ${borderRadius};
                scroll-snap-align: start;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                cursor: pointer;
            }

            /* Image zoom modal styles */
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 1000;
                justify-content: center;
                align-items: center;
            }
            
            .modal-content {
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            }
            
            .close {
                position: absolute;
                top: 20px;
                right: 30px;
                color: white;
                font-size: 30px;
                font-weight: bold;
                cursor: pointer;
            }
        </style>

        <div class="slider-container">
            <div class="controller">
                <button class="arrow left" aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M279 224H104.1l72.3-72.3c9.4-9.4 9.4-24.6 
                        0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 
                        0l-128 128c-9.4 9.4-9.4 24.6 0 33.9l128 
                        128c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 
                        9.4-24.6 0-33.9L104.1 288H279c13.3 
                        0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24z"/>
                    </svg>
                </button>

                <button class="arrow right" aria-label="Next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M41 288h174.9l-72.3 72.3c-9.4 9.4-9.4 24.6 
                        0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 
                        0l128-128c9.4-9.4 9.4-24.6 0-33.9l-128-128c-9.4-9.4-24.6-9.4-33.9 
                        0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9L215.9 224H41c-13.3 
                        0-24 10.7-24 24v32c0 13.3 10.7 24 24 24z"/>
                    </svg>
                </button>
            </div>

            <div class="slider">
                <slot name="slider-item"></slot>
            </div>
        </div>
        

        <div class="modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
        `;


        const slider = shadow.querySelector('.slider');
        const left = shadow.querySelector('.left');
        const right = shadow.querySelector('.right');

        left.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        right.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });


        const modal = shadow.querySelector('.modal');
        const modalImg = shadow.querySelector('.modal-content');
        const closeBtn = shadow.querySelector('.close');

        slider.addEventListener('click', (e) => {
            const clickedItem = e.target.closest('[slot="slider-item"]');
            if (clickedItem) {
                const img = clickedItem.querySelector('img');
                if (img) {
                    modal.style.display = 'flex';
                    modalImg.src = img.src;
                    modalImg.alt = img.alt || '';
                    document.body.style.overflow = 'hidden';
                }
            }
        });


        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
}

customElements.define('arrow-slider', Slider);