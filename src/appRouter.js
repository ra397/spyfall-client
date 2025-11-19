import './components/home.js';
import './components/createGame.js';
import './components/joinGame.js';
import './components/lobby.js';
import './components/game.js';

class AppRouter extends HTMLElement {
    constructor() {
        super();
        this.routes = {
            home: '<app-home></app-home>',
            create: '<create-game></create-game>',
            join: '<join-game></join-game>',
            lobby: '<app-lobby></app-lobby>',
            game: '<app-game></app-game>',
        };

        this.shadow = this.attachShadow({ mode: 'open' });
        this.currentRoute = 'home';
        this.render();
    }

    connectedCallback() {
        window.addEventListener('stateUpdated', (e) => {
            if (this.currentRoute !== state.page) {
                this.currentRoute = state.page;
                this.render();
            }
        });
    }

    render() {
        this.shadow.innerHTML = this.routes[this.currentRoute] || '<div>404 Not Found</div>';
    }
}

customElements.define('app-router', AppRouter);