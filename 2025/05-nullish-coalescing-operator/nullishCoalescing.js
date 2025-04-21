// IMPORTANT: It is used whenever to choose "first defined" value from the list.

/* NOTE:

It will only select the value iff (if and only if) value well defined , it's not neither null Nor undefined.

let a = null;
let b = 100;

a ?? b result into 100
*/  

//TODO: choose name of user from the list, if nothing is defined print "Anonymous".
let firstName = null;
let secondName = null;
let nickName ;   // default value is undefined.

console.log(firstName ?? secondName ?? nickName ?? "Anonymous");


//FIXME: can rewrite using Logical OR operator

console.log(firstName || secondName || nickName || "Anonymous");

