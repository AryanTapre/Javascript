// NOTE: https://javascript.info/function-prototype

let animal = {
    eats: true,
    walks: false
};

function Rabbit(name) {
    this.name = name;
}

//Rabbit.prototype = animal;

let rabbit = new Rabbit("snow");
console.log(rabbit.eats);
console.log(rabbit.walks);


console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);

//Rabbit.prototype.constructor = animal;

console.log(Rabbit.prototype.constructor == Rabbit);



