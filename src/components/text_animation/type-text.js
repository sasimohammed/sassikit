class TypedText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Get attributes with defaults
        this.delay = parseInt(this.getAttribute('delay')) || 100;
        this.textColor = this.getAttribute('text-color') || '#000';
        this.fontSize = this.getAttribute('font-size') || '24px';
        this.fontFamily = this.getAttribute('font-family') || 'Arial, sans-serif';
        this.pause = parseInt(this.getAttribute('pause')) || 1000;
        this.fontWeight = this.getAttribute('font-weight') || 'normal';

        // Get texts from data-texts attribute (comma separated)
        this.texts = (this.getAttribute('data-texts') || this.textContent.trim()).split(',');

        shadow.innerHTML = `
            <style>
            
             :host {
                    display: inline-block;
                    vertical-align: middle;
                }
                .typed-text {
                    color: ${this.textColor};
                    font-size: ${this.fontSize};
                    font-family: ${this.fontFamily};
                    font-weight: ${this.fontWeight}; 
                    height: 1em;
                    line-height: 1;
                   
                }
                .cursor {
                    display: inline-block;
                    width: 3px;
                    height: 1em;
                    background-color: ${this.textColor};
                    animation: blink 0.7s infinite;
                    margin-left: 2px;
                   
                     vertical-align: middle;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    50.1%, 100% { opacity: 0; }
                }
            </style>
            <div class="typed-text"></div>
        `;
    }

    connectedCallback() {
        this.startTyping();
    }

    async startTyping() {
        const container = this.shadowRoot.querySelector('.typed-text');

        while (true) { // Loop forever
            for (const text of this.texts) {
                const trimmedText = text.trim();


                container.innerHTML = '<span class="cursor"></span>';


                for (let i = 0; i < trimmedText.length; i++) {
                    container.insertBefore(
                        document.createTextNode(trimmedText[i]),
                        container.querySelector('.cursor')
                    );
                    await this.sleep(this.delay);
                }


                await this.sleep(this.pause);


                while (container.childNodes.length > 0) { // Keep cursor
                    container.removeChild(container.childNodes[container.childNodes.length-1]);
                    await this.sleep(this.delay / 2);
                }

                // Short pause before next text
                await this.sleep(this.delay * 2);
            }
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

customElements.define('typed-text', TypedText);