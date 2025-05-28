//FIXME: https://javascript.info/property-descriptors

let user = {};

Object.defineProperty(user, "name", {
    value: "aryan",
    enumerable: true,
    writable: true,
    configurable: true
});

console.log(user);

Object.preventExtensions(user); // can't add new properties to object
user.age = 22;
Object.seal(user); // Forbids adding/removing of properties
Object.freeze(user); // Forbids adding/removing/changing of properties

console.log( Object.isExtensible(user) );
console.log( Object.isSealed(user) );
console.log( Object.isFrozen(user) );


let game = {};


Object.defineProperties(game, {
    gameName: {
        value: "ATS2",
        configurable: true,
        enumerable: true,
        writable: true
    }
});


console.log(game);
console.log(Object.getOwnPropertyDescriptors(game));

let A = new Object({
    name: "A",
    age: 22,
    location: "USA"
})

const B = Object.defineProperties({}, Object.getOwnPropertyDescriptors(A));

for (let x in A) {
    console.log(`${x}: ${A[x]}`);   
}

for (let x in B) {
    console.log(`${x}: ${B[x]}`);   
}

"use strict";
console.log(Object.getOwnPropertyDescriptors(B));

Object.defineProperty(B,"location", {
    configurable: false,
    //writable: false
})

B.location = "Japan";
console.log(Object.getOwnPropertyDescriptors(B));

delete B.location;
console.log(Object.getOwnPropertyDescriptors(B));

console.log(this);


let userx = {
    name: "userx"
};

Object.seal(userx);

userx.age = 22;

console.log(JSON.stringify(userx, null, 2));
console.log(Object.isSealed(userx) );



// working with writiable + configurable flags....
// configurable = can't modify + delete properties
// writiable = can't reassign values to properties

let victus = {
    name: "HP victus 15 gaming",
    display: "1920 * 1080",
    ram: "16GB",
    rom: "500GB"
};

Object.defineProperty(victus, "ram", {
    configurable: false
});

delete victus.ram;  // NOTE: Can't delete ram prop

victus.ram = "32GB";
console.log( Object.getOwnPropertyDescriptors(victus) );


  