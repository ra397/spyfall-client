import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";
import { updateState } from "../state/stateManager.js";

const socket = io("http://127.0.0.1:5000");

window.addEventListener('create-game', (event) => {
    const player_name = event.detail.player_name;
    socket.emit("create_game", {
        player_name: player_name,
    }, (response) => {
        if (response.status === 'error') {
            updateState({
                error: true,
                error_message : response.message,
            })
        } else {
            updateState({
                error: false,
                error_message : '',
                uid: response.uid,
                game_code: response.game_code,
                game_owner: response.game_owner,
                players: response.players,
                page: 'lobby',
            })
        }
    });
});

window.addEventListener('join-game', (event) => {
    const player_name = event.detail.player_name;
    const game_code = event.detail.game_code;
    socket.emit("join_game", {
        player_name: player_name,
        game_code: game_code,
    }, (response) => {
        if (response.status === 'error') {
            updateState({
                error: true,
                error_message : response.message,
            })
        } else {
            updateState({
                error: false,
                error_message : '',
                uid: response.uid,
                game_code: response.game_code,
                players: response.players,
                game_owner: response.game_owner,
                page: 'lobby',
            })
        }
    });
});

window.addEventListener('start-round', (event) => {
    const duration = event.detail.duration;
    socket.emit("start_round", {
        uid: state.uid,
        duration: duration,
    }, (response) => {
        if (response.status === 'error') {

        } else {

        }
    });
});

window.addEventListener('end-round', (event) => {
    socket.emit("end_round", {

    }, (response) => {
        if (response.status === 'error') {

        } else {

        }
    });
});

socket.on("player_joined", (data) => {
    updateState({players: data.players});
});

socket.on("round_started", (data) => {
    updateState({
        location: data.location,
        occupation: data.occupation,
        duration: data.duration,
        page: 'game',
    });
});

socket.on("round_ended", (data) => {

});