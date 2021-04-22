const Car = require('./js/Car.js');



const volvo =new Car('Volvo', 'black');
// const zaporazietis =new Car('Zapas', 'silver');
// const tesla =new Car('Tesla', 'red');
volvo.turnOn()
volvo.drive(50)
volvo.drive(15)
volvo.turnOff()
volvo.drive(20)


// zaporazietis.changeColor('orange')
// volvo.statusReport();
// zaporazietis.statusReport();
// tesla.statusReport();