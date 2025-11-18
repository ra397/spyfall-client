import {updateState} from "../state/stateManager.js";

class JoinGame extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = `
            <div class="container">
                <app-input id="username" placeholder="Enter username"></app-input>
                <app-input id="gamecode" placeholder="Enter code"></app-input>
                <div class="buttons-container">
                    <app-button id="back-btn" type="secondary">Back</app-button>
                    <app-button id="submit-btn" type="primary" style="flex: 1">Join Game</app-button>
                </div>
                <span id="error-message"></span>
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
                width: 20ch;
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                
                gap: 1ch;
            }
            
            .buttons-container {
                display: flex;
                gap: 1ch;
            }
            
            #error-message {
                color: #856404;
                background-color: #fff3cd;
                border-color: #ffeeba;
                border-radius: 0.25rem;
                padding: 0.15rem 1ch;
                
                display: none;
            }
            `;

        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.shadow.querySelector('#back-btn').addEventListener('click', () => {
            updateState({
                page: 'home',
            })
        });

        this.shadow.querySelector('#submit-btn').addEventListener('click', () => {
            const username = this.shadow.querySelector('#username').value.trim();
            const code = this.shadow.querySelector('#gamecode').value.trim();
            window.dispatchEvent(new CustomEvent('join-game', { detail: { player_name: username, game_code: code } }));
        });

        const error_message = this.shadow.querySelector('#error-message');
        window.addEventListener("stateUpdated", () => {
           if (state.error) {
               error_message.textContent = state.error_message;
               error_message.style.display = 'inline-block';
           }
        });
    }
}
customElements.define('join-game', JoinGame);