const Apple = require("./apple.js")
const Snake = require("./snake.js")

class Board {
    constructor(dim) {
        this.dim = dim;

        this.snake = new Snake(this);
        this.apple = new Apple(this);
    }

    static blankGrid(dim) {
        const grid = [];

        for (let i = 0; i < dim; i++) {
            const row = [];
            for (let j = 0; j < dim; j++) {
                row.push(Board.BLANK_SYMBOL);
            }
            grid.push(row);
        }

        return grid;
    }

    render() {
        const grid = Board.blankGrid(this.dim);

        this.snake.segments.forEach(segment => {
            grid[segment.i][segment.j] = Snake.SYMBOL;
        });

        grid[this.apple.position.i][this.apple.position.j] = Apple.SYMBOL;

        const rowStrs = [];

        grid.map(row => row.join("")).join(("\n"));
    }

    validPosition(coord) {
        return (coord.i < this.dim) && (coord.i > 0) && (coord.j < this.dim) && (coord.j > 0);
    }
}

Board.BLANK_SYMBOL = ".";


module.exports = Board;