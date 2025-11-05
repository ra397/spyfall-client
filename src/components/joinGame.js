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
                    <app-button type="primary" style="flex: 1">Join Game</app-button>
                </div>
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
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
        });
    }
}
customElements.define('join-game', JoinGame);