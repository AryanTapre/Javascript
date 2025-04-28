//NOTE: https://javascript.info/array

let arr = new Array();
arr[0] =  "panvi";

let arr2 = [
    "aryan",
    123,
    () => {
        console.log("it's an function call,,,");
    },
    {
        name:"aryan",
        age: 22
    }
];

console.log("for..of loop ->");

for (keys of arr2) {
    console.log(keys);
}

// ACCESSING THE LAST ELEMENT.

console.log(arr2.at(-1));


// MEHTODS pop(), push(), shift(), and unshift()

console.log("pop() => \n");
console.log( arr2.pop() ); // returns the popped elements

console.log("push() ==> \n");
arr2.push("101");
console.log(arr2);

console.log("shift() ==> \n");
console.log("elements removed is : " + arr2.shift() ); // returns the first removed element
console.log(arr2);


console.log("unshift() ==> \n");
console.log( arr2.unshift("panvi") ); // returns the new length of an Array.


// building an matrix
console.log("Building a matrix ==> \n");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        console.log(( matrix[i][j] ));
    }
    console.log();   
}

for (const [x, y] of arr2.entries()) {
    console.log(x + " : " + y);
}

let arr3 = [12, NaN,"20"];
const data = arr3.every((value, index, array) => {
    if(typeof value === "string") {
        console.log("inside good");
        
        return "good";
    }else {
        console.log("inside bad");
        
        return "bad";
    }
});

console.log(data);


//console.log(arr3.fill("x"));

// TODO: FILTER
const datax = arr3.filter((value, index, array) => {
    return typeof value == "string";
});
console.log(datax);

console.log("find() ==> \n");

const result = arr3.find((value, index, array) => {
    return typeof value === "string";
});
console.log(result);


// TODO: MAP
console.log("map() ==> \n");
console.log(arr3);


const newArray3 = arr.map((value, index, array) =>  {
    console.log(this);
})


const numberArray = [1, 2, 3, 4, 5];

const sum = numberArray.reduce((accumulate, current, index, array) => {
    accumulate = current + accumulate;
    return accumulate;
},0) 
console.log(sum);


//TODO: 1 Let’s try 5 array operations.
/*
    1.  Create an array styles with items “Jazz” and “Blues”.
    2.  Append “Rock-n-Roll” to the end.
    3.  Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    4.  Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. 
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);

function replaceMiddleElement(arr, replaceString) {
    arr[Math.ceil((arr.length - 1) / 2)] = replaceString;
}
replaceMiddleElement(styles, "arya");
console.log(styles);



//---------------------------------------------METHODS-----------------------------------------

//NOTE: ADD / REMOVE ITEMS

const tesla = ["model-x","model-y","model-s","roadster"];
tesla.push("CyberTruck");
console.log(tesla);
tesla.pop();
console.log(tesla);

tesla.shift();
console.log(tesla);
tesla.unshift("model-x");
console.log(tesla);


// IMPORTANT: Splice
console.log(tesla.splice(1,1,"aryan")); // replacing tesla[1] with "aryan" as string data-type
console.log(tesla);

// IMPORTANT: Slice
console.log(tesla.slice(0, 2)); // Copied element from index 0 to 2

//IMPORTANT: Concat
console.log( tesla.concat(["elonmusk", "spaceX"]) ); // appended "elonmusk" and "spaceX" to tesla array DOES NOTE CHANGE ORIGINAL ARRAY RETURN THE MODIFIED ONE...


// IMPORTANT: For..Each loop

tesla.forEach((value, index, array) => {
    console.log(value + ":" + index + ":"); 
});


// NOTE: SEARCHING IN AN ARRAY..

// IMPORTANT: indexOf() , lastIndexOf() , include()

console.log(tesla);

console.log( tesla.indexOf("model-s") );
console.log( tesla.lastIndexOf("roadster") );
console.log( tesla.includes("model-x") );

// IMPORTANT: find(), findIndex(), findLastIndex()
console.log( tesla.find((value, index, array) => value === "model-x" ) );
console.log( tesla.findIndex((value, index, array) => value === "model-x" ) );
console.log( tesla.findLastIndex((value, index, array) => value === "model-x" ) );

// IMPORTANT: filter()

console.log( tesla.filter((value, index, array) =>  typeof value == "string" ));


// NOTE: TRANSFORM AN ARRAY

// IMPORTANT: map()

console.log( tesla.map((value, index, arr) => value.toUpperCase() ) ); // modifies the array and returns,but original remains the same as before...
console.log(tesla);

// IMPORTANT: Sort()

let xcus = [1, 15, 2];
xcus.sort((a, b) => { return a - b }); // custom comparison function
console.log(xcus);

// IMPORTANT: reverse()
xcus.reverse();
console.log(xcus);

// IMPORTANT: split(), and join()

let apple = "iPhone, Mac book pro, Mac book pro air, Mac Mini";
let splitted = apple.split(", "); // Spliting a single string into array
console.log(splitted);

let joined = splitted.join(", ");
console.log(joined);

// IMPORTANT reduce()

// finding the sum of 'xcus'...
console.log(xcus);

console.log( xcus.reduce((accumulator, value, index, array) => {
    return accumulator += value;    
}, 0) );



/** FIXME:
 * Most methods support “thisArg”
Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.
 */

/** TODO: que
 *  create object named 'appleIphone' with there iPhones
 *  create array appleUser with name of person
 *  iterate over 'sppleUser' array and logs the username with iphone
 */

let appleIphone = {
    iPhone13: "iPhone13",
    iPhone13_mini: "iPhone13-mini",
    iPhone15: "iPhone15"
};

let appleUsers = ["aryan", "panvi", "harshad"];

appleUsers.forEach(function(value, index, array) {
    console.log(value + ":"+this.iPhone13_mini);
}, appleIphone);
