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





