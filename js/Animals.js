/*
Animals:
    -parametrai : name, color, sound, wingsCount, canFly jei daugiau nei 0 sparnu tai canFly true
    -metodai : voice, introduce, flyAway
*/


class Animals{
    constructor (name,color){
        this.name = name;
        this.color = color;
        this.sound = `Doesn't say anything`
        this.wingsCount = 2;
        this.canFly= false;
        this.imposter=false;
        this.canSwim = false;
        this.grantWishes =false;
        
    }


        voice(){
            console.log(`${this.name}: ${this.sound}!`);
        }

        introduce(){
            console.log(`As esu ${this.name} mano spalva ${this.color} ir moku sakyti ${this.sound}`);
        }
        
        flyAway(){
            if(this.canFly) {
                console.log(`${this.name}: Flew away`);
            }
            else {
                console.log(`${this.name}: Can not fly away`);
            }
        }

        swimAway(){
            if(this.canSwim) {
                console.log(`${this.name}: Swim away`);
            }
            else {
                console.log(`${this.name}: Can not swim`);
            }
        }
        makeWish(){
            if(this.grantWishes) {
                console.log(`${this.name}: Make a wish`);
            }
            else {
                console.log(`${this.name}: Can not make a wish`);}
        }
        
        impostor(){
            if(`${this.imposter}`) {
                console.log(`Imposter yea`);
            }
            else {
                console.log(`Imposter no`);
            }
        }

}

module.exports= Animals;