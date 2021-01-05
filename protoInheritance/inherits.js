Function.prototype.inherits = function(BaseClass) {
    function Surrogate() {}
    Surrogate.prototype = BaseClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function(BaseClass) {

    this.prototype = Object.create(BaseClass.prototype);
    this.prototype.constructor = this;
}

// function MovingObject() {}

// function Ship() {}
// Ship.inherits(MovingObject); // BaseClass is in this ccase MovingObject

// function Asteroid() {}
// Asteroid.inherits(MovingObject);


function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    console.log(this.name + " barks!");
};

function Corgi(name) {
    Dog.call(this, name);
}

Corgi.inherits2(Dog);

Corgi.prototype.waddle = function() {
    console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();