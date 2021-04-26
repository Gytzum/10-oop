const Birds = require('./Birds.js');
/*
Eagle:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/

class Eagle extends Birds{
    constructor (name,color){
        super (name, color)
        this.sound = `kva kva`;
        this.canFly= true;
    }
}

module.exports= Eagle;
