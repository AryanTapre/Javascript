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




//TODO:
// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.


let user2 = {
    name: "john",

    loginOk() {
        console.log(`${this.name} logged in`);
        
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
        
    },
};

function askPassword(ok, fail) {
    let password = prompt("Password please ?", "");
    if (password === "rockstar") {
        ok();
    } else {
        fail();
    }
}

askPassword( user2.loginOk.bind(user2), user2.loginFail.bind(user2) );