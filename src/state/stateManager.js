const state = {
    page: 'home',

    uid: '',
    game_owner: null,

    game_code: '',
    location: '',
    occupation: '',
    duration: null,
    players: [],

    error: false,
    error_message: '',
};

export function updateState(partial) {
    Object.assign(state, partial);

    window.dispatchEvent(new CustomEvent('stateUpdated'));
}

globalThis.state = state;