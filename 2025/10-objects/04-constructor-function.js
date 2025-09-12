/**NOTE: Constructor Function
 * - named with capital letter first
 * - Should be executed only with 'new' operator
 */

function User(name, age) {
    this.name = name,
    this.age = age
}

let aryan = new User("aryan", 22);
console.log(aryan);

// Immediate invoked constructor function
const User2 = new function() {
    this.name = "panvi",
    this.age = 20
}
console.log(User2);


// constructor mode test: new.target
function newUser(name, age) {
    if(!new.target) return new newUser(name, age);
    this.name = name,
    this.age = age,
    this.getInfo = function() {
        console.log(this.name + " " + this.age);
    }
}
let userx = new newUser("honey", 25);
userx.getInfo();
   

//TODO:  1. Is it possible to create functions A and B so that new A() == new B()?

let obj = {};
function A() {
    return obj;
}
function B() {
    return obj;
}
console.log("todo 1->");

console.log(new A() === new B());

/* TODO: 2
Create a constructor function Calculator that creates objects with 3 methods:
 read() prompts for two values and saves them as object properties with names a and b respectively.
 sum() returns the sum of these properties.
 mul() returns the multiplication product of these properties.
*/

// function Calculator() {
//     this.a = null;
//     this.b = null;
//     this.read = function() {
//         const readlineInterface = readline.createInterface({
//             input   : process.stdin,
//             output  : process.stdout
//         })
//         readlineInterface.question("Enter value for A and B: ",(input) => {                        
//             console.log(typeof input);

//         })        
//     }
// }

function Calculator() {
    this.a = null;
    this.b = null;
    
    this.read = function() {
        this.a += prompt("a?", 0);
        this.b += prompt("b?", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();


    


 
  
