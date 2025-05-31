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
    }
    
    this.hello = function sayHi() {
        console.log(this.name);
        
    }
}

showPrototypes(User, aryan);



//================== REAL WORLD USE CASE=========================
// TYPE CHECKING IN FUNCITON PARAMETER

function processPayment(paymentMethod) {
    if (!(paymentMethod instanceof PaymentMethod)) {
        throw new Error(`Invalid payment method`);
    }
    // process payment...
}

class PaymentMethod {}
class PayPay extends PaymentMethod {}
class SBICreditCard extends PaymentMethod {}

console.log( processPayment(new PayPay()) );



class A {}
class B extends A {}

console.log(A.isPrototypeOf(B));  // Returns TRUE if ObjA is somewhere in prototype chain of ObjB
console.log(B.prototype.__proto__ == A.prototype);
console.log(B instanceof Object);


//===========================================++++++++++++++++++++++++++++++++++

let DataX = {
    name: "littlex",
    sonOf: "Elon Musk"
}

let objToString = Object.prototype.toString;

console.log( objToString.call(DataX) );


 
