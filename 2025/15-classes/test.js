let Animal = {
    name: "animal",
    eat() {
        console.log(`${this.name} easts - animal class`);
    }
};

let Rabbit = {
    name: "Rabbit",
    __proto__ : Animal,
    eat() {
        //this.__proto__.eat.call(this);
        console.log("this is Rabbit Obj");
        
        console.log(`${this.name} eats`);   
    }
};

let LongEar = {
    name: "LongEar",
    __proto__: Rabbit,
    eat() {
        this.__proto__.eat.call(this);
    }
};


LongEar.eat();

console.log( "==>");


class Animal2 {
    name = 'animal';
    constructor() {
        console.log(this.name+ "animal2");
    }
};
class Rabbit2 extends Animal2 {
    name = "rabbit";
    constructor(...args) {
        super(...args);
        console.log(this.name+ "Rabbit2");
    }

};
new Animal2();
new Rabbit2();




