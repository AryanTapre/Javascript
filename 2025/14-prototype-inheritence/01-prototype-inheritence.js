// NOTE: https://javascript.info/prototype-inheritance

//console.log( Object.getPrototypeOf(this) ); // points to NULL

function outer() {
    const outer = "outer";

    function demo() {
        let proto = this;
        while( (proto = Object.getPrototypeOf(proto)) != null ) {
            console.log(proto);
        }
        if(proto == null) {
            console.log(proto);
        }   
    }
    demo();   
}
outer();




console.log("==> \n");

let vehicle = {
    noOfWheels : null,
    buildQuality:  null,
    engine : null,
    mileage: "13.3"
};

console.log(Object.getPrototypeOf(vehicle) === Object.prototype);


let car = {
    transmissionType: null,
    carType: null,
    fuelType: null,
    carName: null

};

let fortuner = {
    carName: "fortuner",
    transmissionType: "manual",
    carType: "SUV",
    fuelType: "diesel",
    noOfWheels: "four",
    buildQuality: "super", 
};

Object.setPrototypeOf(car,vehicle);
Object.setPrototypeOf(fortuner, car);

for (const key in fortuner) {
    console.log(`${key} = ${fortuner[key]}`);
    
    let isOwn = fortuner.hasOwnProperty(key);
    if (isOwn) {
        console.log("our:", key);
    } else {
        console.log("Not our: ", key);
    }
}


let dummy = {
    name: "dummy",
    age: 22
};

let protovalue = Object.getPrototypeOf(dummy);
console.log(protovalue.constructor === dummy);



while (protovalue) {
    console.log("proto :", protovalue);
    protovalue = Object.getPrototypeOf(protovalue);
}


console.log( Object.getOwnPropertyDescriptors(Object.prototype.hasOwnProperty) );

Object.defineProperty(Object.prototype, "hasOwnProperty", {
    writable: true,
    enumerable: true,
    configurable: true
})

console.log("After defining Object.defineProerty =>");

console.log( Object.getOwnPropertyDescriptors(Object.prototype.hasOwnProperty) );




//=====================================
const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");   
    }
};

const rabit = Object.create(animal);
rabit.jumps = true;
console.log(rabit.eats);

rabit.walk();

console.log(Object.getPrototypeOf(rabit));
console.log(Object.getPrototypeOf(animal));


console.log("checking the default prototypes ==>");

const obj1 = { username: "aryant_x" };
const obj2 = new Object({});
const obj3 = Object.create({});

console.log(Object.getPrototypeOf(obj1));
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj3));



class CollectPrototypes {
  #sourceObject;
  constructor(obj) {
    this.#sourceObject = obj;  
  }
  
  #findPrototype() {
    let prototypeArray = [];
    let currentProtoype = Object.getPrototypeOf(this.#sourceObject);
    
    while (currentProtoype != null) {
       prototypeArray.push(currentProtoype);
       currentProtoype =  Object.getPrototypeOf(currentProtoype); 
    }
    return prototypeArray;  
  }
    
  getPrototype() {
    return this.#findPrototype();        
  } 
};


const collectPrototypes = new CollectPrototypes(fortuner);
for (const prototype of collectPrototypes.getPrototype()) {
  console.log(prototype); 
}

