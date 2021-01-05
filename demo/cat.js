var Cat = function(name) {
    this.name = name;
}

Cat.prototype.meow = function() {
    console.log('meow, Im ' + this.name);
};

module.exports = Cat;