class Input extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('autocomplete', 'off');

        // dynamically set id and placeholder attributes
        if (this.hasAttribute('placeholder')) {
            input.placeholder = this.getAttribute('placeholder');
        }
        if (this.hasAttribute('id')) {
            input.id = this.getAttribute('id');
        }

        const style = document.createElement('style');
        style.textContent = `
        input {
            all: unset;
            box-sizing: border-box; 
            
            width: 100%;
            padding: 0.33rem;
            border-bottom: 0.2ch solid var(--secondary-color);
        }
        
        input:focus {
            border: 1px solid var(--secondary-color);
            border-radius: 0.33rem;
        }
        
        input:focus::placeholder {
            visibility: hidden;        
        }
        `;
        shadow.appendChild(style);
        shadow.appendChild(input);
    }

    get value() {
        return this.shadowRoot.querySelector('input').value;
    }

    set value(val) {
        this.shadowRoot.querySelector('input').value = val;
    }
}
customElements.define('app-input', Input);