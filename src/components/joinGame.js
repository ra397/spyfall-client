class JoinGame extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        shadow.textContent = `
            Join Game
        `;
    }
}
customElements.define('join-game', JoinGame);