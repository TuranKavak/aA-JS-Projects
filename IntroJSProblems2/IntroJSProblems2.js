// // IntroJSProblems2
// //Phase I
// function titleize(names, callback) {
//     let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);

//     callback(titleized);

// }

// titleize(["Mary", "Brian", "Leo"], (names) => {
//     names.forEach(name => console.log(name));
// });

// //Phase II

// function Elephant(name, height, tricks) {
//     this.name = name;
//     this.height = height;
//     this.tricks = tricks;
// }

// Elephant.prototype.trumpet = function() {
//     console.log(`${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!`);
// };

// Elephant.prototype.grow = function() {
//     this.height += 12;
// };

// Elephant.prototype.addTrick = function(trick) {
//     this.tricks.push(trick);
// };

// Elephant.prototype.play = function() {
//     idx = Math.floor(Math.random() * this.tricks.length);
//     console.log(`${this.name} is ${this.tricks[idx]}!`);
// };



// let elephant1 = new Elephant("John", 50, ["painting a picture", "jumping around"]);
// var elephant2 = new Elephant("Sally", 70, ["painting a picture", "jumping around"]);


// console.log(elephant2.tricks);
// elephant2.addTrick("riding a bike");
// elephant2.play();


// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// Elephant.paradeHelper = function(elephant) {
//     console.log(`${elephant.name} is trotting by!`);
// };


// herd.forEach(function(el) {
//     console.log(Elephant.paradeHelper(el));
// });


// function dinerBreakfast() {
//     let order = "I'd like cheesy scrambled eggs please.";
//     console.log(order);

//     return function(food) {
//         order = `${order.slice(0, order.length - 8)} and ${food} please.`
//         console.log(order);
//     }
// }

// let bfastOrder = dinerBreakfast();
// bfastOrder("chocolate chip pancakes");
// bfastOrder("grits");


// const readline = require('readline');

// const reader = readline.createInterface({
//     // it's okay if this part is magic; it just says that we want to
//     // 1. output the prompt to the standard output (console)
//     // 2. read input from the standard input (again, console)

//     input: process.stdin,
//     output: process.stdout
// });

// reader.question("What is your name?", function(answer) {
//     console.log(`Hello ${answer}!`);
// });

// console.log("Last program line");

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absurdTimesAsync(numTimes, fnAsync, completionFn) {
    let i = 0;

    function loopStep() {
        if (i == numTimes) {
            // we're done, stop looping
            completionFn();
            return;
        }

        i++;

        // fnAsync is an asynchronous function that takes a callback (in this case loopStep)
        fnAsync(loopStep);
    }

    loopStep();
}

function addTwoNumbersAsync(callback) {
    reader.question("Enter #1: ", function(numString1) {
        reader.question("Enter #2: ", function(numString2) {
            const num1 = parseInt(numString1);
            const num2 = parseInt(numString2);

            callback(num1 + num2);
        });
    });
}

let totalSum = 0;

function addTwoNumbersAndIncrementAsync(callback) {
    addTwoNumbersAsync(function(result) {
        totalSum += result;

        console.log(`Sum: ${result}`);
        console.log(`Total Sum: ${totalSum}`);

        callback();
    });
}

function outputResultAndCloseReader() {
    console.log(`All done! Total Sum: ${totalSum}`);
    reader.close();
}

absurdTimesAsync(5, addTwoNumbersAndIncrementAsync, outputResultAndCloseReader);