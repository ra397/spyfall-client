const state = {
    uid: '',
    game_code: '',
    game_owner: null,
    players: [],
    page: 'home',
    error: false,
    error_message: '',
};

export function updateState(partial) {
    Object.assign(state, partial);

    window.dispatchEvent(new CustomEvent('stateUpdated'));
}

globalThis.state = state;