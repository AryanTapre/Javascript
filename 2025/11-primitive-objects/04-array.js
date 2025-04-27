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
