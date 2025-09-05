class MyLoginComponent extends HTMLElement {
    static get observedAttributes() {
        return [
            "fields",
            "form-label",
            "field-types",
            "options",
            "submit-text",
            "bg-color",
            "text-color",
            "input-bg",
            "input-border",
            "input-border-width",
            "input-border-style",
            "border-radius",
            "padding",
            "input-height",
            "textarea-height",
            "label-transition",
            "enable-focus",
            "font-size",
            "font-family",
            "label-color",
            "button-font-size"
        ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;

        // Get attributes with defaults
        const fields = this.getAttribute("fields")?.split(",") || ["email", "password"];
        const FormLabel = this.getAttribute("form-label") || "Log In ";
        const fieldTypes = this.getAttribute("field-types")?.split(",") || [];
        const optionsList = this.getAttribute("options")?.split(";") || [];
        const submitText = this.getAttribute("submit-text") || "Sign In";

        const bgColor = this.getAttribute("bg-color") || "#ffffff";
        const textColor = this.getAttribute("text-color") || "#333333";
        const inputBg = this.getAttribute("input-bg") || "#f8f9fa";
        const inputBorder = this.getAttribute("input-border") || "#e0e0e0";
        const inputBorderWidth = this.getAttribute("input-border-width") || "1px";
        const inputBorderStyle = this.getAttribute("input-border-style") || "solid";

        const borderRadius = this.getAttribute("border-radius") || "8px";
        const padding = this.getAttribute("padding") || "2rem";
        const inputHeight = this.getAttribute("input-height") || "3rem";
        const textareaHeight = this.getAttribute("textarea-height") || "100px";
        const labelTransition = this.getAttribute("label-transition") || "all 0.3s ease";
        const enableFocus = this.getAttribute("enable-focus") !== "false";

        // Typography attributes
        const fontSize = this.getAttribute("font-size") || "1rem";
        const fontFamily = this.getAttribute("font-family") || "Arial, sans-serif";
        const labelColor = this.getAttribute("label-color") || "#999";
        const buttonFontSize = this.getAttribute("button-font-size") || "1rem";

        // Generate form fields
        const formHtml = fields
            .map((field, index) => {
                let type = "text";
                if (field.toLowerCase() === "password") type = "password";
                if (field.toLowerCase() === "email") type = "email";
                if (field.toLowerCase() === "date") type = "date";
                if (fieldTypes[index]) type = fieldTypes[index];

                let optionsHtml = "";
                if (type === "select" && optionsList[index]) {
                    const options = optionsList[index].split(",");
                    optionsHtml = options
                        .map((option) => {
                            const [value, text] = option.split(":");
                            return `<option value="${value || option.trim()}">${text || option.trim()}</option>`;
                        })
                        .join("");
                }

                if (type === "select") {
                    return `
            <div class="form-group">
              <select id="${field}" name="${field}" required>
                <option value="" disabled selected></option>
                ${optionsHtml}
              </select>
              <label for="${field}">${field.charAt(0).toUpperCase() + field.slice(1)}</label>
            </div>`;
                } else if (type === "textarea") {
                    return `
            <div class="form-group textarea-group">
              <textarea id="${field}" name="${field}" required placeholder=" "></textarea>
              <label for="${field}">${field.charAt(0).toUpperCase() + field.slice(1)}</label>
            </div>`;
                } else {
                    return `
            <div class="form-group">
              <input type="${type}" id="${field}" name="${field}" required placeholder=" " />
              <label for="${field}">${field.charAt(0).toUpperCase() + field.slice(1)}</label>
            </div>`;
                }
            })
            .join("");

        shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          font-size: ${fontSize};
          font-family: ${fontFamily};
        }

        .form-container {
          background-color: ${bgColor};
          padding: ${padding};
          border-radius: ${borderRadius};
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   
      
        }
        
        form{
            margin-bottom: 8px;
        
        }

        .form-title {
          font-size: 1.5em;
          margin-bottom: 1.5rem;
          color: ${textColor};
          text-align: center;
        }

        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        input, select, textarea {
          width: 100%;
          font-size: 1em;
          background-color: ${inputBg};
          border: ${inputBorderWidth} ${inputBorderStyle} ${inputBorder};
          border-radius: ${borderRadius};
          transition: all 0.3s ease;
          box-sizing: border-box;
          color: ${textColor};
          font-family: ${fontFamily};
        }

        input, select {
          height: ${inputHeight};
          padding: 0 1rem;
        }

        textarea {
          height: ${textareaHeight};
          padding: 1rem;
          resize: vertical;
          min-height: ${textareaHeight};
        }

      ${enableFocus ? `
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${textColor};
          border-width: ${inputBorderWidth};
          border-style: ${inputBorderStyle};
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        }`
            : `
        input:focus, select:focus, textarea:focus {
          outline: none;
        }
`}

        label {
          position: absolute;
          top: ${inputHeight};
          left: 1rem;
          transform: translateY(-50%);
          color: ${labelColor};
          pointer-events: none;
          transition: ${labelTransition};
          background-color: ${inputBg};
          padding: 0 0.3rem;
        }

        input:focus + label,
        input:not(:placeholder-shown) + label,
        select:focus + label,
        select:valid + label,
        textarea:focus + label,
        textarea:not(:placeholder-shown) + label {
          top: 0;
          transform: translateY(-50%);
          font-size: 0.8em;
          color: ${textColor};
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: ${textColor};
          color: white;
          border: none;
          border-radius: ${borderRadius};
          font-size: ${buttonFontSize};
          font-family: ${fontFamily},serif;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      </style>

      <div class="form-container">
        <slot name="form-title"><h2 class="form-title">${FormLabel}</h2></slot>
        <form>
          ${formHtml}
          <button type="submit">${submitText}</button>
        </form>
        <div class="form-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;

        // form submission handling
        const form = shadow.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (form.checkValidity()) {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                this.dispatchEvent(
                    new CustomEvent("form-submit", {
                        detail: { data },
                        bubbles: true,
                        composed: true,
                    })
                );
            } else {
                form.reportValidity();
            }
        });
    }
}

customElements.define("form-layout", MyLoginComponent);
