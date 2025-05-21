import readline from 'readline';
import { isStringObject } from 'util/types';

/** NOTE:
 *  https://javascript.info/number
 *  
 *  Numbers is of two categories: 
 *      Regular numbers, and BigInt numbers
 * 
 */

// FIXME:  Numbers of Zeros Shorcut
let billion = 1000000000;
let billion2 = 1e9; // nine zeros at right side on one '1' i.e  1000000000
let twoPrecision = 1e-2; // two Zeros at left side of one i.e    0.01 

console.log(billion);
console.log(billion2);
console.log(twoPrecision);

//FIXME: Hex, binary, and Octal number representation...
console.log("binary, cotal, and hex ->");

console.log(0xa);  // HEX  0x
console.log(0b101);  // BINARY 0b
console.log(0o555);  // OCTAL 0o



//FIXME: Convert number to binary, octal, and hex form
console.log(" Number to : binary, cotal, and hex conversion ->");

let num1 = 10;
console.log( num1.toString(2) );  //  binary
console.log( num1.toString(8) );  //  octal
console.log( num1.toString(16) );  // hex decimal

console.log(Math.trunc(19.23));


//FIXME: ROUNDINGS
console.log("Roundings ->");

console.log( Math.ceil(0.5) );
console.log( Math.floor(0.5) );
console.log( Math.round(0.4) );

let num2 = 12.34567890;
console.log(num2.toFixed(2));


//IMPORTANT:  SOME IMPRECISE CALCULATIONS...

console.log(0.1 + 0.2 == 0.3);
let sum = 0.1 + 0.2;

console.log(sum.toFixed(1)) ;



//NOTE: ParseInt and parseFloat

console.log( parseInt('100px') );
console.log( parseFloat('100.12') );


//TODO: 1 Create a script that prompts the visitor to enter two numbers and then shows their sum.
// let numberA = Number(prompt("The first number ?", 0));
// let numberB = Number(prompt("The second number ?", 0));
// alert(numberA + numberB);



/** TODO: 2 Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

    The resulting value must be returned as a number.
    The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. 
 */

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please ?", 0);
    }while( !isFinite(num) );

    if (num == null || num == '') {
        return null;
    }
    
    return Number(num);
}


//TODO: 3 custom random number generator with min-max range defined

function customRandom(minR, maxR) {
    return Math.round((Math.random() * (maxR - minR)) + minR);
}
console.log(customRandom(5, 10));


const bina = 1..toString(2);
console.log("bina = " + bina);


let valx = 10.1234567891233138;
console.log(valx);


let a = "1000 INR ";
let b = "2000 INR";

console.log( 
    parseInt(a) + parseInt(b)
);

console.log("a = " +  parseInt(a));
console.log("b = " + typeof parseInt(b));



let num = "10.1234";

console.log( global.parseInt(num) );


