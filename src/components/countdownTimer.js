class CountdownTimer extends HTMLElement {
    constructor() {
        super();
        this._timeLeft = 0;
        this._interval = null;

        this.shadow = this.attachShadow({ mode: 'open' });
        this._span = document.createElement("span");
        this.shadow.append(this._span);
    }

    connectedCallback() {
        this.countdown(state.duration);
    }

    disconnectedCallback() {
        this._clearInterval();
    }

    countdown(seconds) {
        this._clearInterval();
        this._timeLeft = seconds;
        this._updateDisplay();

        this._interval = setInterval(() => {
            this._timeLeft--;
            this._updateDisplay();

            if (this._timeLeft <= 0) {
                this._clearInterval();
            }
        }, 1000);
    }

    _updateDisplay() {
        const m = Math.floor(this._timeLeft / 60).toString().padStart(2, "0");
        const s = Math.floor(this._timeLeft % 60).toString().padStart(2, "0");
        this._span.textContent = `${m}:${s}`;
    }

    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
}
customElements.define("countdown-timer", CountdownTimer);