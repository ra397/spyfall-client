import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

const socket = io("http://127.0.0.1:5000");

window.addEventListener('create-game', (event) => {
    const player_name = event.detail.player_name;
    socket.emit("create_game", {
        player_name: player_name,
    }, (response) => {
        console.log("Game created!");
        console.log(response);
    });
});

window.addEventListener('join-game', (event) => {
    const player_name = event.detail.player_name;
    const game_code = event.detail.game_code;
    socket.emit("join_game", {
        player_name: player_name,
        game_code: game_code,
    }, (response) => {
        console.log("Game joined!");
        console.log(response);
    });
});

socket.on("player_joined", (data) => {
    console.log(data.players);
});