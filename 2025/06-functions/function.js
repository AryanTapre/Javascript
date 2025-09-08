// NOTE: Default function declaration
function calcSum(a, b) {
    return a + b;
}

// NOTE: Function Expression
const calcSum2 = function(a, b) {
    return a + b;
}

// NOTE: Arrow functions
const calcSum3 = (a, b) => a + b;


function callme() {
    
   // RETURNS undefined 
}
let val = callme();
console.log(typeof val);



let user = {
    name: "aryan",
    age: 22
};

function hola() {
    console.log(this.name);
    console.log(this.age);
}

const newfunc = hola.bind(user);

const x = newfunc;

newfunc();
x();


let func1 = (arg1, arg2, arg3) =>  { console.log("aruyandasdsa"); };

