const Birds = require('./Birds.js');
/*
Dragonfly:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/

class Dragonfly extends Birds{
    constructor (name,color){
        super (name, color)
        this.sound = `zzzzz`;
        this.wingsCount = 4;
        this.canFly= true;
        this.imposter=true;
        
    }
}

module.exports= Dragonfly;