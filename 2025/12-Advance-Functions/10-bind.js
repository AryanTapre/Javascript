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

//askPassword( user2.loginOk.bind(user2), user2.loginFail.bind(user2) );


let User3 = {
  name: "Jhonny Ive",
  login(result) {
    console.log(this.name + (result ? '\n loggedin' : '\n failed to login in'));
  }    
};


function askForPassword(ok, fail) {
  let password = "12345";
  if (password == "1234" ) {
    ok() // User3.login(true);
  } else {
    fail(); // User3.login(false);
  }
}

function wrapperOk(func) {
  return function() {
    return func.call(this, true); // it's called Partial binding
  }          
}

function wrapperFail(func) {
  return function() {
    return func.call(this, false); // it's called partial binding
  }
}

//askForPassword(wrapperOk(User3.login), wrapperFail(User3.login));
//askForPassword(() => User3.login(true), () => User3.login(false));
askForPassword(User3.login.bind(User3, true), User3.login.bind(User3, false));


// // Fixing arguments without fixing Context.
// let User = {
//     firstName: "Aryan",
//     say(time, phrase) {
//         console.log(`[${time}] ${this.firstName}: ${phrase}`); 
//         return "I returned you!";
//     }
// };


// function partial(func, ...argsBound) {
//     return function(...args) {
//         return func.call(this, ...argsBound, ...args);
//     }
// }

// User.sayNow = partial(User.say, new Date().getHours() + ":" + new Date().getMinutes());
// const CATCH = User.sayNow("Hola Sir");
// console.log(`catch value is : ${CATCH}`);


