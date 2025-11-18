class TimeSelector extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = `
            <span id="minus">-</span>
            <span id="time">08:00</span>
            <span id="plus">+</span>
        `;

        const style = document.createElement('style');
        style.textContent = `
            span {
                cursor: pointer;
                user-select: none;
            }
        `;
        this.shadow.appendChild(style);

        this.timeInSeconds = 8 * 60;
    }

    connectedCallback() {
        const minus = this.shadow.getElementById('minus');
        const plus = this.shadow.getElementById('plus');

        minus.addEventListener('click', (e) => {
            this.changeTime(-30);
        });

        plus.addEventListener('click', (e) => {
            this.changeTime(30);
        });
    }

    changeTime(seconds) {
        this.timeInSeconds = Math.min(Math.max(this.timeInSeconds + seconds, 6 * 60), 12 * 60);
        const minutes = Math.floor(this.timeInSeconds / 60);
        const secs = this.timeInSeconds % 60;

        const time = this.shadow.getElementById('time');
        time.textContent = `${minutes.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }

    getTime() {
        return this.timeInSeconds;
    }
}
customElements.define('time-selector', TimeSelector);