const Fish = require('./Fish.js');
/*
Goldfish:
    -parametrai : name, color, sound, grantWishes, canSwim
    -metodai : voice, introduce, grantWish, canSwim
*/

class Goldfish extends Fish{
    constructor (name,color){
        super (name, color)
        this.sound = `blur blurp`;
        this.grantWishes = true;

    }
}

module.exports= Goldfish;
