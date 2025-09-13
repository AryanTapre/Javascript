// NOTE: https://javascript.info/native-prototypes

let obj = new Object();

console.log(Object.getPrototypeOf(obj) == Object.prototype);
console.log(obj.__proto__ == Object.prototype);

console.log(obj.__proto__.__proto__ === null);


// TODO: BORROWING Object Methods....
function func() {
    console.log("before: " +arguments);
    Array.prototype.push.call(arguments, "aryantapre");
    console.log(arguments);
};
func(1,2);


console.log("Native prototype borrowing =>");


let objx = new Object({
    0: "aryan",
    1: 22,
    length: 2,
});

objx.join = Array.prototype.join;

console.log(objx.join(','));

console.log(Object.prototype.constructor.prototype);