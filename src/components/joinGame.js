class JoinGame extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        shadow.innerHTML = `
            <div class="container">
                <app-input id="username" placeholder="Enter username"></app-input>
                <app-input id="gamecode" placeholder="Enter code"></app-input>
                <app-button type="primary">Join Game</app-button>
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
        `;

        shadow.appendChild(style);
    }
}
customElements.define('join-game', JoinGame);