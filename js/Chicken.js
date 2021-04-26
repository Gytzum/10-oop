const Birds = require('./Birds.js');
/*
Chicken:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/


class Chicken extends Birds{
    constructor (name,color){
        super (name, color)
        this.sound = 'Cip cip';
        this.canFly = false;
    }
}

module.exports= Chicken;