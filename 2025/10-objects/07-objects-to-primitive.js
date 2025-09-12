// NOTE: https://javascript.info/object-toprimitive

/** THREE MAIN TYPE CONVERSIONS.
 *   Number : obj.valueOf()
 *   String : obj.toString()
 *   default  : obj[Symbol.toPrmitive](hint) { 
 *                     }
 */

let a = new Number("1");
let b = "10";

const addres = a + b;
console.log(typeof addres);


let obj1 = {

    [Symbol.toPrimitive](hint) {
        console.log("Symbol method called....");
        console.log(typeof hint);
    },

    toString() {
        console.log("toString() called...");  
        return "10";
    },
    valueOf() {
        console.log("valueOf() called...");
        return 10;
    }
}

console.log( 10 + obj1 );


// TIMPORTANT: Every Plain object has toString(), and valueOf() methods
let user = {
    name: "aryantapre",
    age: 22,
    toString() {
        return `name: ${this.name},age: ${this.age}`;
    },
    
}

const newObj = user.toString();
console.log("typeof newObj = " + typeof newObj);
console.log(newObj);



// Some real World example

class Money {
  constructor(amount, currency = "USD") {
    this.amount = amount;
    this.currency = currency;
  }

  // control object to primitive conversion
  [Symbol.toPrimitive](hint) {
    if ( hint ===  "number" ) {
      console.log("number was ca1lled!");
      return this.amount;
    }
    if ( hint === "string" ) {
        console.log("String was called!");
        return `${this.amount.toFixed(2)} ${this.currency}`;    
    }

    return this.amount;
  }
}

const price = new Money(500, "INR");
const tax = new Money(390, "INR");

// String conversion
console.log(`total price: ${price}`);

//Number context
console.log(price + tax);

console.log(price > tax);

console.log(price + " only");



