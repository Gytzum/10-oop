const Animals = require('./js/Animals.js');
const Fish = require('./js/Fish.js');
const Birds = require('./js/Birds.js');
const Pet = require('./js/Pet.js');

const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js');
const Parrot = require('./js/Parrot.js');
const Eagle = require('./js/Eagle.js');
const Dragonfly = require('./js/DragonFly.js');
const Goldfish = require('./js/Goldfish.js');
const Nemo = require('./js/Nemo.js');





const rexas = new Dog('Rexas', 'Juoda','Au au!!');
const rainis = new Cat ('Rainis', 'margas', 'Miau miau');
const keksas = new Hamster('Keksas','pilkas')
const cypsius = new Chicken('Cypsius','baltas');
const jack = new Parrot('Jack','raudonas');
const king = new Eagle('King','black/white');
const dragon = new Dragonfly('Dragon','colourfull');
const silver = new Goldfish('Silver','sidabrinis');
const nemo = new Nemo('Nemo','raudonai baltas');

rexas.voice();
rexas.introduce();
console.log('-----------');
rainis.voice();
rainis.introduce();
console.log('---------');
keksas.voice();
keksas.introduce();
console.log('--------');
cypsius.voice();
cypsius.introduce();
cypsius.flyAway();
console.log('---------');
jack.voice();
jack.introduce();
jack.flyAway();
console.log('--------');
king.voice();
king.introduce();
king.flyAway();
console.log('--------');
dragon.voice();
dragon.introduce();
dragon.flyAway();
dragon.impostor();
console.log('----------');
silver.voice();
silver.introduce();
silver.swimAway();
silver.makeWish();
console.log('-------------');
nemo.voice();
nemo.introduce();
nemo.swimAway();
nemo.makeWish();
nemo.flyAway();
