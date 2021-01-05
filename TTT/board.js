const MoveError = require("./moveError");

class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    isOver() {
        if (this.winner() != null) {
            return true;
        }

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            for (let columnIdx = 0; columnIdx < 3; columnIdx++) {
                if (this.isEmptyPos([rowIdx, columnIdx])) {
                    return false;
                }
            }
        }

        return true;
    }

    print() {
        const strs = [];

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            const marks = [];
            for (let columnIdx = 0; columnIdx < 3; columnIdx++) {
                marks.push(this.grid[rowIdx][columnIdx] ? this.grid[rowIdx][columnIdx] : ' ');
            }
            strs.push(`${marks.join('|')}\n`);
        }
        console.log(strs.join('-----\n'));

    }

    winner() {
        const posSeqs = [
            // horizontals
            [
                [0, 0],
                [0, 1],
                [0, 2]
            ],
            [
                [1, 0],
                [1, 1],
                [1, 2]
            ],
            [
                [2, 0],
                [2, 1],
                [2, 2]
            ],
            // verticals
            [
                [0, 0],
                [1, 0],
                [2, 0]
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1]
            ],
            [
                [0, 2],
                [1, 2],
                [2, 2]
            ],
            // diagonals
            [
                [0, 0],
                [1, 1],
                [2, 2]
            ],
            [
                [2, 0],
                [1, 1],
                [0, 2]
            ]
        ];

        for (let i = 0; i < posSeqs.length; i++) {
            const winner = this.winnerHelper(posSeqs[i])
            if (winner != null) {
                return winner;
            }
        }

        return null;
    }

    winnerHelper(posSeq) {
        for (let boardMarkIdx = 0; boardMarkIdx < Board.marks.length; boardMarkIdx++) {
            const targetMark = Board.marks[boardMarkIdx];
            let winner = true;
            for (let posIdx = 0; posIdx < posSeq.length; posIdx++) {
                const pos = posSeq[posIdx];
                const mark = this.grid[pos[0]][pos[1]];

                if (targetMark != mark) {
                    winner = false;
                }
            }
            if (winner) {
                return targetMark;
            }
        }
        return null;
    }

    isEmptyPos(pos) {
        if (!Board.isValid(pos)) {
            throw new MoveError('Is not a valid position!')
        }

        return this.grid[pos[0]][pos[1]] === null
    }

    placeMark(pos, mark) {
        if (!this.isEmptyPos(pos)) {
            throw new MoveError('Is not an empty position!');
        }
        this.grid[pos[0]][pos[1]] = mark;
    }

    static makeGrid() {
        const grid = [];

        for (let i = 0; i < 3; i++) {
            grid.push([]);
            for (let j = 0; j < 3; j++) {
                grid[i].push(null);
            }
        }
        return grid;
    }

    static isValid(pos) {
        return (0 <= pos[0]) && (pos[0] < 3) && (0 <= pos[1]) && (pos[1] < 3);
    }
}


Board.marks = ['x', 'o'];

module.exports = Board;