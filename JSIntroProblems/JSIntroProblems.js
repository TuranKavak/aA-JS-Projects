//Part1


function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}`)
};

madLib('make', 'best', 'guac');

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}`)
};

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

console.log(isSubstring("time to program", "time"));

console.log(isSubstring("Jump for joy", "joys"));

//part2

function fizzBuzz(numbers) {
    const result = numbers.filter(number => (number % 3 === 0 && !(number % 5 === 0)) || number % 5 === 0 && !(number % 3 === 0));
    return result;
}
console.log(fizzBuzz([1,2,3,4,5,6,8,9,15]));

function isPrime(number) {
    if (number===1 || number ===0){
        return false;
    } else if (number === 2) {
        return true;
    } else {
        {
            for(var x = 2; x < number; x++)
            {
                if (number%x ===0) {
                    return false;
                }
            }
        }
        return true;
    }
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));
// console.log(isPrime(3548563));


function sumOfNPrimes(n) {
    var arr = [];
    if (n===0) {
        return arr;
    }
    for (var i = 0; arr.length < n; i++) {
        if(isPrime(i)) {
            arr.push(i);
        }
    }
 
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(arr);
    console.log(sum);
}

// sumOfNPrimes(0);
// sumOfNPrimes(1);
sumOfNPrimes(5);