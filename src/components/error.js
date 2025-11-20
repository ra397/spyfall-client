class ErrorMessage extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.span = document.createElement("span");
        this.span.style.display = "none"; // hide initially
        this.shadow.appendChild(this.span);

        const style = document.createElement("style");
        style.textContent = `
            span {
                color: #856404;
                background-color: #fff3cd;
                border: 1px solid #ffeeba;
                border-radius: 0.25rem;
                padding: 0.15rem 1ch;
            }
        `;
        this.shadow.appendChild(style);
    }

    set message(msg) {
        if (msg) {
            this.span.textContent = msg;
            this.span.style.display = "inline-block";
        } else {
            this.span.textContent = "";
            this.span.style.display = "none";
        }
    }
}

customElements.define("error-message", ErrorMessage);