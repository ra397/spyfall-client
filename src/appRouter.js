import './components/home.js';
import './components/createGame.js';
import './components/joinGame.js';

class AppRouter extends HTMLElement {
    constructor() {
        super();
        this.routes = {
            home: '<app-home></app-home>',
            create: '<create-game></create-game>',
            join: '<join-game></join-game>',
        };

        this.shadow = this.attachShadow({ mode: 'open' });
        this.currentRoute = 'home';
        this.render();
    }

    connectedCallback() {
        window.addEventListener('navigate', (e) => {
            this.currentRoute = e.detail.page;
            this.render();
        });
    }

    render() {
        this.shadow.innerHTML = this.routes[this.currentRoute] || '<div>404 Not Found</div>';
    }
}

customElements.define('app-router', AppRouter);