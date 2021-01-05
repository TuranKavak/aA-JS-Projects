const View = require("./ttt-view");
const Game = require("../TTTNodeSolution/game");

$(() => {
    const rootEl = $('.ttt');
    const game = new Game();
    new View(game, rootEl);
});