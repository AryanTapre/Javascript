/** NOTE:
 *  Symbol creation
 *  - Local symbol
 *  - Global symbol 
 */

//TODO: Local Symbol Creation
let user1 = Symbol("user");
let user2 = Symbol("user");
console.log(user1 == user2);

let ins_id = Symbol("ins_id");
const InstagramUser = {
    [ins_id] : "12x05pol",
    createdAt: "2018-07-24"
};

for (keys in InstagramUser) {
    console.log(`${keys} : ${InstagramUser[keys]}`);    
}
const objV = Object.getOwnPropertySymbols(InstagramUser);

for (const keys of objV) {
    console.log(keys, objV[keys]);
}

console.log("-> \n");

const Keys = Reflect.ownKeys(InstagramUser);
for (const key of Keys) {
    console.log(key);   
}


//TODO: Global Symbol Creation.

console.log("global symbols -> \n");

let g1 = Symbol.for("x_id"); // stored in a registery
let g2 = Symbol.for("x_id"); // Type is Symbol
console.log(g1 === g2);

console.log(Symbol.keyFor(g1));
console.log(Symbol.keyFor(g2));
