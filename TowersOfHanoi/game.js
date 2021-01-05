class Game {
    constructor() {
        this.towers = [
            [3, 2, 1],
            [],
            []
        ];
    }

    isValidMove(startTowerIdx, endTowerIdx) {
        const startTower = this.towers[startTowerIdx];
        const endTower = this.towers[endTowerIdx];


        if (startTower.length === 0) {
            return false;
        } else if (endTower.length === 0) {
            return true;
        } else {
            const topStartDisk = startTower[startTower.length - 1];
            const topEndDisk = endTower[endTower.length - 1];
            return topStartDisk < topEndDisk;
        }
    }

    move(startTowerIdx, endTowerIdx) {
        if (this.isValidMove(startTowerIdx, endTowerIdx)) {
            this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
            return true;
        } else {
            return false;
        }
    }

    print() {
        console.log(JSON.stringify(this.towers));
    }

    promptMove(reader, callback) {
        this.print();

        reader.question('Please enter starting Tower Index:(0,1,2)', res => {
            console.log(`Your response ${res}`);
            const startTowerIdx = parseInt(res);
            reader.question('Please enter ending Tower Index:(0,1,2)', res2 => {
                console.log(`Your response ${res2}`);
                const endTowerIdx = parseInt(res2);
                callback(startTowerIdx, endTowerIdx);
            });
        });
    }

    isWon() {
        return (this.towers[1].length === 3) || (this.towers[2].length === 3);
    }


    run(reader, gameCompletionCallback) {
        this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
            if (!this.move(startTowerIdx, endTowerIdx)) {
                console.log('Invalid move!');
            }

            if (!this.isWon()) {
                this.run(reader, gameCompletionCallback);
            } else {
                this.print();
                console.log('You win!');
                gameCompletionCallback();
            }
        });

    }
}

module.exports = Game;