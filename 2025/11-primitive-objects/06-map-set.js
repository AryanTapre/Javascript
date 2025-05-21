// NOTE: Map 

const toInsert = [
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"]
];

const myMap = new Map( toInsert );

console.log( myMap.get(4) );
myMap.set("aryan", "tapre");

console.log( myMap.has("aryan") );

console.log( myMap.size );

myMap.delete(1);

console.log( myMap.has(1) );

//myMap.clear()


myMap.forEach((value, key, map) => {
    console.log(value +":"+key); 
})

for ( [key, value] of myMap.entries() ) {
    console.log(key + ": "+ value);
}


// NOTE: Set
console.log("\n");

let rollNo = new Set([1, 2, 3, 4, 5]);
rollNo.add(6);

console.log( rollNo );
console.log( rollNo.has(5) );

rollNo.delete(1);
console.log( rollNo.has(1) );

console.log( rollNo.size );


rollNo.forEach((x) => {
    console.log(x);
})

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices =  Object.fromEntries( 
    Object.entries(prices).map((value, index, array) => [value[0], value[1] * 2] ) 
);

console.log(doublePrices);
