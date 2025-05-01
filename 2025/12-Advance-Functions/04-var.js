//NOTE: https://javascript.info/var


/** FIXME:
 *  Var is either function scoped, or global scoped
 *  Var is hoisted (raised) to top level of scope / file as regular function declaration does
 *  can be Access before there declaration... 
 */

if (true) {
    var test = "testing";
}
console.log(test);


//FIXME:
// if (true) {
//     let testx = "testingX...";
// }
// console.log(testx);


// NOTE: IIFE (Immediately Invoked Function Declaration)
// Trick is to pretend JS Engine as function expression

// Parentheses around the function
(function() {
        console.log("IIFE 1");   
    }
)();


// Parentheses around the whole thing
(function() {
    console.log("IIFE 2");
    
}());


//  Bitwise NOT Operator starts with an expression
!function() {
    console.log("IIFE 3 using bitwise NOT operator");
    
}();


// Unary Plus starts with an expression
+function() {
    console.log("IIFE 4 using Unary Operator");
    
}();