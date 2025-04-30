
// NOTE: CONVERTING TO JSON STRING

let user = {
    name: "john",
    age: 22
};

console.log( typeof user );

console.log( typeof JSON.stringify(user,null, 3) );

let student = {
    name: "aryan",
    age: 22,
    isAdmin: false,
    isGoogleAuth: true,
    subjects: {
        math: true,
        english: true,
        computer: true,
        sanskrit: false
    },

    getUserDetails() {                     //IMPORTANT: Ignores funcitons, symbols, and property with undefined Value
        console.log(this.name);
    },

    [Symbol("id")]: 123,
    something: undefined
};

console.log( JSON.stringify(student, null, 4) );


//NOTE: REPLACER FUNCTION..

let iPhone13 = {
    name: "iPhone13",
    capacity: {
        low: "128GB",
        medium: "256GB",
        high: "512BG",
    },
    size : {
        height: "5.18 inches",
        width: "2.53 inches",
        depth: "0.30 inch",
    },
    display : {
        type: "Super-Retina XDR Display",
        size: "5.4 inch",
    },
    chip : "A15 Bionic",
};

console.log("iPhone 13 -> \n");

let iPhone13JsonData = JSON.stringify(iPhone13, function replacer(key, value) {
    console.log("hello:" + key + ":" + value);
    
    return value;
}, 4);

console.log( iPhone13JsonData );


// NOTE: CONVERTING FROM JSON STRING TO OBJECT...

const oriObj =  JSON.parse(iPhone13JsonData);
console.log( typeof oriObj);



