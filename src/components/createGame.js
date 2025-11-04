class CreateGame extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        shadow.textContent = `
            Create Game
        `;
    }
}

customElements.define('create-game', CreateGame);