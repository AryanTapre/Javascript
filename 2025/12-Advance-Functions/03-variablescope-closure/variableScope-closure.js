//IMPORTANT: https://javascript.info/closure
/**
 * In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment object consists of two parts:

Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
A reference to the outer lexical environment, the one associated with the outer code.
 */


function data() {
    let name = "aryan";
    let age = 22;

    return {
        getName:  name,
        getAge:  age       
    };
}

const x = data();
console.log( x.getName );
console.log( x.getAge );


