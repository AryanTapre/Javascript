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

/** TODO: 1
 * 1. create an empty object 'userx'
 * 2. add the property 'name' with the value John
 * 3. Add the property 'surname' with the value Smith
 * 4. Change the value of the 'name' to Pete.
 * 5. Remove the property 'name' from the object
 */

const userx = {};
userx.name = "John";
userx.surname = "Smith";
user1.name = "Pete";
delete userx.name;
console.log("\n todo1 ->");
console.log(userx);


// TODO: 2  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

const isEmptyObject = function(sourceObj) {
    for (prop in sourceObj) {
        return false;
    }
    return true;
}

let schedule = {
    ["21:00"]: "buy groceries from GeneralStore"
};
console.log( isEmptyObject(schedule) );

/** TODO: 3
 *  We have an object storing salaries of our team:
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

    If salaries is empty, then the result must be 0.
 * 
 */

const getTotalSalary = function(salaries) {
    let sum = 0;

    if ( isEmptyObject(salaries) ) {
        return sum;
    }

    for (prop in salaries) {
        sum += salaries[prop];    
    }
    return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(` todo 3-> \n ${getTotalSalary(salaries)}`);

// TODO: 4  Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = function(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(" todo 4 -> \n");
console.log(menu);
multiplyNumeric(menu); 
console.log(menu);



