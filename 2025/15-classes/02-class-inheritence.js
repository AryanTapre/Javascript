// NOTE: https://javascript.info/class-inheritance

class Animal {
    name = "animal";
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    get animalName() {
        console.log("animal name is : " + this.name);
    }
    run() {
        console.log(`current context : ${this}`);        
        console.log("Animal class : "+this.name);   
    }
};  

class Dog extends Animal {
    name = "Dog"
    constructor(...args) {
        super(...args)
    }
    run() { // [[HomeObject]] = Dog
        super.run();
    }
    get animalName() {
        console.log("Dog name is : " + this.name);
    }
};

new Dog().run();
new Dog().animalName;
    


class A {
    name = "A";
    constructor() {
        console.log(`HERO : ${this.name}`);
    }
}
class B extends A {
    name = "B";
    constructor(...args) {
        super(...args);
        console.log(`HERO 2 : ${this.name}`);   
    }
}

new A();
new B();


// IMPORTANT: UNDER THE HOOD OF SUPER KEYWORD
// super.sayHi() === Object.getPrototypeOf([[HomeObject]]).sayHi.call(this);

class AnimalX {
    name = "AnimalX";
    constructor() {
        console.log(this.name);   
    }
}

class Rabbit extends AnimalX {
    name = "Rabbit";
    constructor(...args) { 
        //NOTE:  [[constructorKind]]: 'Derived'
        super(...args);
        console.log(this.name);
    }
}

new AnimalX();
new Rabbit();


let Person = {
    name: "Person",
    eat() {
        console.log(`Person name ${this.name} is eating now!`);   
    }
}

let Aryan = {
    __proto__: Person,
    name: "Aryan",
    eat() {
       // Object.getPrototypeOf(Aryan).eat.call(this);
       // this.__proto__.eat.call(this);
        console.log(`called Aryan.eat(): ${this.name}`);
        
    }
}

let Panvi = {
    __proto__: Aryan,
    name: "Aryan",
    eat() {
        Object.getPrototypeOf(Panvi).eat.call(this);
       // this.__proto__.eat.call(this);
        console.log("called Panvi.eat()");
        
    }
}


Panvi.eat();