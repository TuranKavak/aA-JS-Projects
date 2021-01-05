var Dog = function(name) {
    this.name = name;
}

Dog.prototype.woof = function() {
    console.log('woof, Im ' + this.name);
};

module.exports = Dog;