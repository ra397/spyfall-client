import './countdownTimer.js';

class Game extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <div class="container">
                <span id="location"></span>
                <span id="occupation"></span>
                <div id="players-list"></div>
                <countdown-timer></countdown-timer>
                <app-button id="submit-btn" type="primary">End Round</app-button>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            
            .container {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
            }
        `;

        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.render();

        window.addEventListener('stateUpdated', () => {
            this.render();
        });

        this.shadow.getElementById('submit-btn').addEventListener('click', (e) => {
            window.dispatchEvent(new CustomEvent('end-round'));
        });
    }

    render() {
        this.shadow.getElementById('location').textContent = state.location;
        this.shadow.getElementById('occupation').textContent = state.occupation;
        this.shadow.getElementById('players-list').textContent = (state.players ?? []).join(", ");

        if (state.game_owner) {
            this.shadow.getElementById('submit-btn').style.display = 'inline-block';
        } else {
            this.shadow.getElementById('submit-btn').style.display = 'none';
        }
    }
}
customElements.define('app-game', Game);