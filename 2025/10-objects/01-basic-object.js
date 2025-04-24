/** NOTE:
 *  Object can be created using two ways:
 *  -   Object literal {...}
 *  -   Constructor function new keyword
 */

//FIXME: Object Literal
const user1 = {
    firstName: "aryan",
    lastName: "tapre",
    desg: "software engineer",
    "like birds": true
};

const firstName = "firstName";
console.log(user1);
console.log(user1.desg);
console.log(user1[firstName]);
console.log(user1["like birds"]);

delete user1["like birds"];
console.log(`After deleting -->`);
console.log(user1);

// property value shorthand
function makeUser2(name ,age) {
    return {
        name,
        age
    };
}
let user2 = makeUser2("john", 32);
console.log(user2);

console.log("firstName" in user2);

// for..in..loop
console.log(" \n for..in..loop ==>");

for (prop in user1) {
    console.log(prop);
}
