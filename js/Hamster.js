const Pet = require('./Pet.js');
/*
Hamster:
    -parametrai : name, color, sound, canEatTillDeath
    -metodai : voice, introduce
*/


class Hamster extends Pet{
    constructor (name, color) {
        super(name,color)
        this.sound = 'Nom nom!';
        this.canEatTillDeath = true;
    }
}
            module.exports = Hamster;