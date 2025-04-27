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
