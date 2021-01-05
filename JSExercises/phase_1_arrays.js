// Array-prototype-uniq


Array.prototype.uniq = function() {

    let uniqueArray = [];
    for (let i=0; i < this.length; i++ ) {
        if (uniqueArray.indexOf(this[i]) === -1) {
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
};

//++++++++++++++++++++

//second alternative version
Array.prototype.uniq2 = function () {

    let uniqueArray = [];

    this.forEach(function(el) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el)
        }
    });
    return uniqueArray;
};


// let array = [1, 2, 2, 3, 3, 3,4,5,4,5,6,6,7,8,9,7,6,5,4];

// console.log(array.uniq2());

//++++++++++++++++++++
//++++++++++++++++++++


// Array.prototype.twoSum

Array.prototype.twoSum = function () {
    const pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = (i+1); j < this.length; j++) {
            if (this[i] + this[j] === 0 && i != j ) {
                pairs.push([i,j]);
            }
        }
    }
    
    return pairs;
}

let array = [1, -1, 2, 3, -3, 3, -6, 6, 7, 6, 5, 4];

console.log(array.twoSum());





//++++++++++++++++++++
//++++++++++++++++++++





// Array.prototype.transpose

Array.prototype.transpose = function () {
    
    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for(let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());


//++++++++++++++++++++
//++++++++++++++++++++