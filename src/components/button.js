class Button extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('span');
        button.innerHTML = `<slot></slot>`;
        const style = document.createElement('style');
        style.textContent = `
            :host {
                padding: 0.33rem;
                border-radius: 0.33rem;
                cursor: pointer;
                
                text-align: center;
            }
            
            :host([type="primary"]) {
                background: var(--primary-color);
                border: 1px solid var(--primary-color);
                color: var(--secondary-color);
            }
            
            :host([type="secondary"]) {
                background: var(--secondary-color);
                border: 1px solid var(--primary-color);
                color: var(--primary-color); 
            }
        `;

        shadow.appendChild(button);
        shadow.appendChild(style);
    }
}
customElements.define('app-button', Button);