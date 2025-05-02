//NOTE: https://javascript.info/bind


// FIXME:  WORKING WITH BIND FOR THIS CONTEXT
let user = {
    firstName: "Aryan",
    sayHi() {
        console.log(`hello, ${this.firstName}`);
    }
};

// setTimeout( function() {
//     user.sayHi();
// },100 );

setTimeout(user.sayHi.bind(user), 0);

//FIXME: BIND FOR arguments only called PARTIAL BINDING FUNCTION...

function mul(a, b) {
    return a * b;
}

const newMul = mul.bind(null, 2);

console.log( newMul(2) );
console.log( newMul(3) );
console.log( newMul(4) );





