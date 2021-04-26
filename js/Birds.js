
const Animals = require('./Animals.js');
/*
Birds:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/


class Birds extends Animals{
    constructor (name,color){
        super (name,color)
        this.canSwim = true;
        this.grantsWishes = false;
    }



}

module.exports= Birds;