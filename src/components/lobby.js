class Lobby extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = `
            <span id="game-code"></span>
            <div id="players-list"></div>
        `;

        const style = document.createElement('style');
        style.textContent = `
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        `;

        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.render();

        window.addEventListener('stateUpdated', () => {
            this.render();
        });
    }


    render() {
        this.shadow.getElementById('game-code').textContent = state.game_code ?? "";
        this.shadow.getElementById('players-list').textContent = (state.players ?? []).join(", ");
    }
}

customElements.define('app-lobby', Lobby);