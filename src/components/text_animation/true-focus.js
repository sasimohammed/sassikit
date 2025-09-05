class TrueFocus extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const text = this.getAttribute('text') || this.textContent || 'True Focus';
        const blurAmount = this.getAttribute('blur') || '5';
        const duration = this.getAttribute('duration') || '0.5';
        const borderColor = this.getAttribute('border-color') || 'green';
        const fontSize = this.getAttribute('font-size') || '3rem';
        const fontWeight = this.getAttribute('font-weight') || '900';
        const fontColor = this.getAttribute('font-color') || '#ffffff';
        const fontFamily = this.getAttribute('font-family') || 'inherit'; // 👈 new

        const colorForShadow = borderColor.includes('rgba') ? 'black' : borderColor;

        shadow.innerHTML = `
      <style>
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1em;
          flex-wrap: wrap;
        }

        .word {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily}; /* 👈 new */
          color: ${fontColor};
          transition: filter ${duration}s ease;
        }

        .focus-frame {
          position: absolute;
          box-sizing: content-box;
          transition: left 0.5s ease, top 0.5s ease, width 0.5s ease, height 0.5s ease;
        }

        .corner {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: 3px solid ${borderColor};
          filter: drop-shadow(0 0 4px ${colorForShadow});
          border-radius: 3px;
        }

        .top-left {
          top: -10px;
          left: -10px;
          border-right: none;
          border-bottom: none;
        }

        .top-right {
          top: -10px;
          right: -10px;
          border-left: none;
          border-bottom: none;
        }

        .bottom-left {
          bottom: -10px;
          left: -10px;
          border-right: none;
          border-top: none;
        }

        .bottom-right {
          bottom: -10px;
          right: -10px;
          border-left: none;
          border-top: none;
        }
      </style>

      <div class="container" id="container">
        ${text.split(' ').map(word => `<span class="word">${word}</span>`).join('')}
        <div class="focus-frame" id="frame">
          <span class="corner top-left"></span>
          <span class="corner top-right"></span>
          <span class="corner bottom-left"></span>
          <span class="corner bottom-right"></span>
        </div>
      </div>
    `;

        const container = shadow.getElementById('container');
        const frame = shadow.getElementById('frame');
        const words = Array.from(shadow.querySelectorAll('.word'));

        let index = 0;

        function moveFocus() {
            const activeWord = words[index];
            const wordRect = activeWord.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            frame.style.left = `${wordRect.left - containerRect.left}px`;
            frame.style.top = `${wordRect.top - containerRect.top}px`;
            frame.style.width = `${wordRect.width}px`;
            frame.style.height = `${wordRect.height}px`;

            words.forEach(w => w.style.filter = `blur(${blurAmount}px)`);
            activeWord.style.filter = 'blur(0)';

            index = (index + 1) % words.length;
        }

        const delay = (+duration + 1) * 1000;

        function loop() {
            moveFocus();
            setTimeout(loop, delay);
        }

        requestAnimationFrame(() => {
            moveFocus();
            loop();
        });
    }
}

customElements.define('focus-text', TrueFocus);
