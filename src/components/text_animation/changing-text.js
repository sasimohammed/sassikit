class ChangingText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const text = this.getAttribute('text') || 'Changing';
        const changingTexts = this.getAttribute('changing-texts')?.split(',').map(t => t.trim()) || ['Text'];
        const fontSize = this.getAttribute('font-size') || 'inherit';
        const fontWeight = this.getAttribute('font-weight') || 'normal';
        const color = this.getAttribute('color') || 'inherit';
        const fontFamily = this.getAttribute('font-family') || 'inherit';
        const interval = parseInt(this.getAttribute('interval') || '2500');
        const bgColor = this.getAttribute('bg-color') || 'plum';
        const borderRadius = this.getAttribute('border-radius') || '4px';
        const padding = this.getAttribute('padding') || '0.25rem 0.5rem';

        shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .container {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .main-text {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          color: ${color};
          font-family: ${fontFamily},serif;
        }

        .changing-text-container {
          border-radius: ${borderRadius};
          padding: ${padding};
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${bgColor};
          position: relative;
          overflow: hidden;
          width: auto;
          transition: width 0.4s ease; /* smooth resize */
        }

        .changing-text {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          color: ${color};
          display: flex;
          justify-content: center;  
          align-items: center;
          background-color: red;
          font-family: ${fontFamily},serif;
          position: relative;
          height: 1em;
        }

        .word {
          position: absolute;
          white-space: nowrap;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .word.current {
          animation: popIn 0.6s forwards;
        }

        .word.exiting {
          animation: popOut 0.6s forwards;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translate(-50%, 100%) scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -10%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
        
        @keyframes popOut {
          0% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -120%) scale(0.8);
          }
        }
      </style>

      <div class="container">
        <span class="main-text">${text}</span>
        <div class="changing-text-container">
          <span class="changing-text"></span>
        </div>
      </div>
    `;

        this.changingTextEl = shadow.querySelector('.changing-text');
        this.container = shadow.querySelector('.changing-text-container');
        let index = 0;

        this.displayWord(changingTexts[0]);

        setTimeout(() => {
            index = 1;
            this._changeInterval = setInterval(() => {
                this.displayWord(changingTexts[index]);
                index = (index + 1) % changingTexts.length;
            }, interval);
        }, 2000);
    }

    displayWord(word) {
        const newWord = document.createElement('span');
        newWord.className = 'word current';
        newWord.textContent = word;

        this.changingTextEl.appendChild(newWord);

        // adjust container width to match word width
        const width = newWord.offsetWidth;
        this.container.style.width = `${width + 10}px`; // +10 for padding balance

        const oldWords = this.changingTextEl.querySelectorAll('.word:not(.current)');
        oldWords.forEach(w => {
            w.classList.add('exiting');
            setTimeout(() => {
                w.remove();
            }, 600);
        });

        setTimeout(() => {
            newWord.classList.remove('current');
        }, 600);
    }

    disconnectedCallback() {
        if (this._changeInterval) {
            clearInterval(this._changeInterval);
        }
    }
}

customElements.define('changing-text', ChangingText);
