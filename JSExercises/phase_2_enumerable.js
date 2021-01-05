
const NUMS = [1, 2, 3, 4, 5];

// Array#myEach

Array.prototype.myEach = function (func) {

    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};


NUMS.myEach((num) => {
    console.log(num);
});


// Array#myMap

Array.prototype.myMap = function (func) {
    const mappedArray = [];

    this.myEach(element => mappedArray.push(func(element)));

    return mappedArray;
};

console.log(NUMS.myMap(num => num * num));



//Array#myReduce(callback[, initialValue])

Array.prototype.myReduce = function (func, initialValue) {

    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;

    arr.myEach(el => result = func(result, el));

    return result;
}


// // without initialValue
// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }); // => 6

// // with initialValue
// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25); // => 31

console.log(NUMS.myReduce((total, item) => total + item));
