function sum1() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sum1(1, 2, 3, 4) === 10);
console.log(sum1(1, 2, 3, 4, 5) === 15);

function sum2(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}


console.log(sum2(1, 2, 3, 4) === 10);
console.log(sum2(1, 2, 3, 4, 5) === 15);


// myBind.js

Function.prototype.myBind = function(context) {
    const fn = this;
    const bindArgs = Array.from(arguments).slice(1);

    return function _boundFn() {
        const callArgs = Array.from(arguments);
        return fn.apply(context, bindArgs.concat(callArgs));
    };
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
    return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
};

// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function() {
//     console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true




//////Currieng
function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let total = 0;

            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }

            return total;
        } else {
            return _curriedSum;
        }

        return _curriedSum;

    };
}


Function.prototype.curry = function(numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn(...args);
        } else {
            return _curriedFn;
        }

    };
    return _curriedFn;

};

Function.prototype.curry2 = function(numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn.apply(null, args);
        } else {
            return _curriedFn;
        }

    };
    return _curriedFn;
}

Function.prototype.curry3 = function(numArgs) {
    const argArray = [];
    const _curriedFn = (arg) => {
        argArray.push(arg);
        if (argArray.length === numArgs) {
            return this(...argArray);
        } else {
            return _curriedFn;
        }
    };
    return _curriedFn;

}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry3(3)(4)(20)(6)); // == 30