const Pet = require('./Pet.js');
/*
Dog:
    -parametrai : name, color, sound
    -metodai : voice, introduce
*/


class Dog extends Pet{
    constructor (name,color){   
        super(name,color)
        this.sound ='Au au'
    }
}

module.exports= Dog;