const Fish = require('./Fish.js');

/*
Nemo:
    -parametrai : name, color, sound, grantWishes, canSwim
    -metodai : voice, introduce, grantWish, canSwim
*/

class Nemo extends Fish{
    constructor (name,color){
        super (name, color)
        this.sound = `blir blirp`;
    }
}

module.exports= Nemo;