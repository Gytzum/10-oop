const Birds = require('./Birds.js');
/*
Parrot:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/

class Parrot extends Birds{
    constructor (name,color){
        super (name, color)
        this.sound = 'I am a captain' + ' ' +name;
        this.canFly= true;
    }
}

module.exports= Parrot;

