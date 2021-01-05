//range

function range(start, end) {

    if (start === end) {
        return [];
    }

    let r = range(start, end - 1);
    console.log(r);
    r.push(end-1);

    return r;
}

console.log(`range(3, 10) = ${range(3, 10)}`);


//sumRec(arr)

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let lastNum = arr[arr.length - 1];
    // console.log(sum);
  
    lastNum = sumRec(arr.slice(0, arr.length - 1)) + lastNum;
    return lastNum; 

}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);


//exponent(base, exp)

function exp1(base, exp) {
    if (exp === 0) {
        return 1;
    }

    let result = base * exp1(base, exp - 1);
    return result;

}

console.log(`exp1(2, 4) = ${exp1(2, 4)}`);


function exp2(base, exp) {
    return exp === 0 ? 1 : (base * exp2(base, exp - 1));

}

console.log(`exp2(2, 4) = ${exp2(2, 4)}`);


// fibonacci(n)

function fibonacci(n) {

    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let fibs = fibonacci(n-1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]) ;
    return fibs;
}


console.log(`fibsRec(5) = ${fibonacci(5)}`);


// deepDup(arr)

// This function is a type-checking helper function
// See this article for an explanation:
// https://toddmotto.com/understanding-javascript-types-and-reliable-type-checking/

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

const array = [[2], 3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);


// bsearch(arr, target)

function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(arr.length/2);
    const probe = arr[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        const left = arr.slice(0, probeIdx);
        return bsearch(left, target);
    } else {
        const right = arr.slice(probeIdx + 1);
        const subProblem = bsearch(right, target);
        console.log(subProblem);
        return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }

}


console.log(`bsearch([1, 2, 3, 4, 5, 6, 8,9,10,11,12,13], 12) = ${bsearch([1, 2, 3, 4, 5, 6, 8,9,10,11,12,13], 12)}`);

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

//mergeSort

function merge(left, right) {
    
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
        merged.push(nextItem);
    }
    return merged.concat(left,right);
}



function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    } else {
        const splitIdx = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, splitIdx));
        const right = mergeSort(arr.slice(splitIdx)); 

        return merge(left, right);
    }

}

console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);


//subsets(arr)


function subsets(arr) {

    if (arr.length === 0) {
        return [[]];
    } 

    const first = arr[0];

    const withoutFirst = subsets(arr.slice(1));
    
    const withFirst = withoutFirst.map(sub => [first].concat(sub));
    
    return withoutFirst.concat(withFirst);
}

console.log(`subsets([1, 3]) = ${JSON.stringify(subsets([1, 3]))}`);
