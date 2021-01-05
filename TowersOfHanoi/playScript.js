const Game = require('./game.js');
const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let g = new Game();

g.run(reader, completionCallback);

function completionCallback() {
    reader.question('Do you want to play again? y/n', restartGame => {
        if (restartGame == 'y') {
            let g = new Game();
            g.run(reader, completionCallback);
        } else {
            reader.close();
        }
    });
};