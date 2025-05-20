/**
 * NOTE:
 * Here 'user' is a variable that holds reference to object
 */
const user = {name:"austin"};
const admin = user; // only reference is assigned to 'admin'

let body;
body = Object.create({}, Object.getOwnPropertyDescriptors(user));

console.log("body =>");

for (let key in body) {
    console.log(key);
}


console.log(user === admin);

//NOTE: cloning an object
let userxId = "id"
const userx = {
    name: 'aryan',
    [userxId]: '20240009525',
    headphones: 'zebronics'
}

let clone = {};
for (let key in userx) {
    clone[key] = userx[key];
}
console.log(clone);

clone = Object.assign({}, userx);
console.log(clone);

clone = {...userx};
console.log(clone);

let laptop = {
    brand: "hp",
    name: "vitcus",
    spec: {
        ram: "16GB",
        rom: "512GB",
        "storage-type": "ssd"
    }
}

// FIXME: Object.assign()
let laptopClone = Object.assign({}, laptop);
console.log(laptopClone);

//FIXME: structuredClone

let laptopClone2 = structuredClone(laptop);
console.log(laptopClone2);




let cars = ['fortuner','innova'];
cars.aryan = "aryan";

for (let x of cars) {
    console.log(x);
}


console.log(cars.length);
cars[100] = "100";
console.log(cars);

Array.prototype.aryan = function length() {
    console.log("this is Aryan...");
    
}

let x = new Array();

x.aryan();

const userA = {
    name : "steve Jobs",
    sizes: {
        height: 182,
        width: 50
    },
    //hero: () =>{ console.log("I'm a Hero!"); }
};


const l1 = Object.assign({}, userA);
const l2 = Object.create({}, Object.getOwnPropertyDescriptors(userA));

console.log("...printing l1... => ");
for (const key in l1.sizes) {
    console.log(`${key}: ${l1.sizes[key]}`);   
}

console.log("...printing l2... => ");
for (const key in l2.sizes) {
    console.log(`${key}: ${l2.sizes[key]}`);   
}


console.log(l1.sizes == l2.sizes);

// IMPORTANT
const l3 = structuredClone(userA);

console.log(l1 == l3.sizes);

