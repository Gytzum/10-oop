const Animals = require('./Animals.js');
/*
Pet:
    -parametrai : name, color, sound
    -metodai : voice, introduce
*/


class Pet extends Animals{
    constructor (name,color){
        super(name,color)

    }
}

module.exports= Pet;