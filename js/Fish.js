
const Animals = require('./Animals.js');
/*
Fish:
    -parametrai : name, furcolor, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/


class Fish extends Animals{
    constructor (name,color){
        super (name,color)
        this.canSwim = true;
    }

}

module.exports= Fish;