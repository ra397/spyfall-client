import './timeSelector.js';

class Lobby extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = `
            <div class="container">
                <span id="game-code"></span>
                <div id="players-list"></div>
                <time-selector></time-selector>
                <app-button id="submit-btn" type="primary">Start Round</app-button>
                
                <!-- TODO: implement error message for game owner starting round -->
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

        this.timeSelector = this.shadow.querySelector('time-selector');
        this.submitBtn = this.shadow.querySelector('#submit-btn');

        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.render();

        window.addEventListener('stateUpdated', () => {
            this.render();
        });

        this.submitBtn.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('start-round', {
                detail: { duration: this.timeSelector.getTime() },
            }))
        })
    }

    render() {
        this.shadow.getElementById('game-code').textContent = state.game_code ?? "";
        this.shadow.getElementById('players-list').textContent = (state.players ?? []).join(", ");

        if (state.game_owner) {
            this.timeSelector.style.display = 'inline-block';
            this.submitBtn.style.display = 'inline-block';
        } else {
            this.timeSelector.style.display = 'none';
            this.submitBtn.style.display = 'none';
        }
    }
}

customElements.define('app-lobby', Lobby);