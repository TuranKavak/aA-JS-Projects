const Board = require('./board.js');
const MoveError = require('./moveError.js');

class Game {

    constructor() {
        this.board = new Board();
        this.currentPlayer = Board.marks[0];
    }

    isOver() {
        return this.board.isOver();
    }

    playMove(pos, mark) {
        this.board.placeMark(pos, this.currentPlayer);
        this.swapTurn();
    }

    promptMove(reader, callback) {
        const game = this;

        this.board.print();
        console.log(`Current Turn: ${this.currentPlayer}`);

        reader.question('Please enter row', rowIdxStr => {
            const rowIdx = parseInt(rowIdxStr);
            reader.question('Please enter column', colIdxStr => {
                const columnIdx = parseInt(colIdxStr);
                callback([rowIdx, columnIdx]);
            });
        });
    }

    run(reader, gameCompletionCallback) {
        this.promptMove(reader, move => {
            try {
                this.playMove(move);
            } catch (e) {
                if (e instanceof MoveError) {
                    console.log(e.msg);
                } else {
                    throw e;
                }
            }

            if (this.isOver()) {
                this.board.print();
                if (this.winner()) {
                    console.log(`${this.winner()} has won!`);
                } else {
                    console.log('DRAW');
                }
                gameCompletionCallback();
            } else {
                this.run(reader, gameCompletionCallback);
            }
        });

    }

    winner() {
        return this.board.winner();
    }


    swapTurn() {
        if (this.currentPlayer === Board.marks[0]) {
            this.currentPlayer = Board.marks[1];
        } else {
            this.currentPlayer = Board.marks[0];
        }
    }
}

module.exports = Game;