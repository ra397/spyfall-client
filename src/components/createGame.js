import './button.js';
import './input.js';
import {updateState} from "../state/stateManager.js";
import "./error.js";

class CreateGame extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = `
            <div class="container">
                <app-input id="username" placeholder="Enter username"></app-input>
                <div class="buttons-container">
                    <app-button id="back-btn" type="secondary">Back</app-button>
                    <app-button id="submit-btn" type="primary" style="flex: 1">Create Game</app-button>
                </div>
                <error-message></error-message>
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
            window.dispatchEvent(new CustomEvent('create-game', { detail: { player_name: username} }));
        });

        window.addEventListener('stateUpdated', (e) => {
            const error = this.shadow.querySelector('error-message');
            if (state.error) {
                error.message = state.error_message;
            } else {
                error.message = '';
            }
        });
    }
}

customElements.define('create-game', CreateGame);