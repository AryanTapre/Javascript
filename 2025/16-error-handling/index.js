// this file has incentive of understanding Error.

function getAllProperties(obj) {
    let properties = new Set();

    while(obj) {
        Reflect.ownKeys(obj).forEach(key => properties.add(key));
        obj = Object.getPrototypeOf(obj);
    }
    
    return [...properties];
}

const error  = new Error("aryanTapre");
console.log( getAllProperties(error) );




