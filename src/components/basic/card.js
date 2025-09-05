class Card extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Get user-defined attributes with fallback defaults
        const width = this.getAttribute('width') || '300px';
        const height = this.getAttribute('height') || '300px';
        const layerColor = this.getAttribute('layer-color') || 'rgba(0, 0, 0, 0.7)';
        const layerText = this.getAttribute('layer-text') || '';
        const textColor = this.getAttribute('text-color') || 'white';
        const textSize = this.getAttribute('text-size') || '32px';
        const textWeight = this.getAttribute('text-weight') || 'bold';

        shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: ${width};
          height: ${height};
          margin: 10px;
        }

        .card-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          box-shadow: 1px 0 5px darkgray;
          position: relative;
          overflow: hidden;
        }

        .content {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .layer {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: ${layerColor};
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;
          color: ${textColor};
          font-size: ${textSize};
          font-weight: ${textWeight};
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .card-container:hover .layer {
          opacity: 1;
        }

        ::slotted([slot="card-content"]) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      </style>

      <div class="card-container">
        <div class="content">
          <slot name="card-content"></slot>
          <div class="layer">${layerText}</div>
        </div>
      </div>
    `;
    }
}

customElements.define('overlay-card', Card);

