/**
 * NOTE:
 * Here 'user' is a variable that holds reference to object
 */
const user = {name:"austin"};
const admin = user; // only reference is assigned to 'admin'

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

