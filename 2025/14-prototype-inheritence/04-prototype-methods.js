// NOTE: https://javascript.info/prototype-methods

let animal =  {
    eat: true,
    dance: true
};

let Hero = Object.create(animal, {
  name: {
    value: "doggy",
    enumerable: true,
    writable: true,
    configurable: true
  }  
})

for (const key in Hero) {
    console.log(key);
    
}



// IMPORTANT: VERY VERY PLAIN OBJECT...
let user =  Object.create(null);
console.log(Object.getPrototypeOf(user));


// TODO: 1
/**
 * There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.
 * 
 */
console.log("==>");

let dictionary = Object.create(null, {
    toString: {
        enumerable: false,
        writiable: false,
        configurable: false,
        value: function() {
            return Object.keys(this).join(",");
        }
    }
});

dictionary.apple = "apple";
dictionary.__proto__ = "test";

for (let x in dictionary) {
    console.log(`${x}: ${dictionary[x]}`);    
}




