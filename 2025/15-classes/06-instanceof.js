// NOTE: https://javascript.info/instanceof

class User {
    #name;
    constructor(name) {
        this.#name = name;
    }
    //_name = "hola";
    get name() {
        return this.#name;
    }

    [Symbol.hasInstance](obj) {
        if (obj._name) return true;
    }
};

const aryan = new User("aryan");

console.log(aryan instanceof User);
console.log(aryan instanceof Object);


// Function that prints all prototypes of Object
function showPrototypes(myClass, obj) {    
    while ((currentProto = Object.getPrototypeOf(obj)) != null ) {
        console.log(currentProto);        
        obj = currentProto;
    }this.name = name;
    this.hello = function sayHi() {
        console.log(this.name);
        
    }
}

showPrototypes(User, aryan);




