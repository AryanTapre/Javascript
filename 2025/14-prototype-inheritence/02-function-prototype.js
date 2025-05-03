// NOTE: https://javascript.info/function-prototype

let animal = {
    eats: true,
    walks: false
};

function Rabbit(name) {
    this.name = name;
}

console.log(Object.getPrototypeOf(Rabbit) == Object.prototype);



//Rabbit.prototype = animal;

let rabbit = new Rabbit("snow");
console.log(rabbit.eats);
console.log(rabbit.walks);


console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);

//Rabbit.prototype.constructor = animal;

console.log(Rabbit.prototype.constructor == Rabbit);



// NOTE:


function Car() {};
Car.prototype.drive = () => console.log("vroom");

const bmw = new Car();

console.log(bmw.__proto__ === Car.prototype);
console.log(Car.prototype.constructor === Car);
console.log(bmw.constructor === Car);



console.log(Array.prototype.constructor === Array);
