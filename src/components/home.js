import './button.js';

class Home extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.shadow.innerHTML = `
        <div class="container">
            <span class="title">Spyfall</span>
            <span class="description">
                One of you is not who they claim to be.
                Most players know the location.
                The spy does not.
                Through clever questions and sharp answers, uncover the spy before they uncover you.
                But beware—reveal too much, and the spy might strike first.
            </span>
            <div class="buttons-container">
                <app-button id="create-game-btn" type="secondary">Create Game</app-button>
                <app-button id="join-game-btn" type="primary">Join Game</app-button>
            </div>
        </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
                justify-content: space-around;
            }
            
            .title {
                font-size: 4rem;
            }
            
            .description {
                text-align: center;
            }
            
            .buttons-container {
                display: flex;
                width: 100%;
                flex-direction: row;
                justify-content: space-evenly;
            }
        `;

        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.shadow.querySelector('#create-game-btn').addEventListener('click', (e) => {
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'create' } }));
        });
        this.shadow.querySelector('#join-game-btn').addEventListener('click', (e) => {
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'join' } }));
        });
    }
}
customElements.define('app-home', Home);