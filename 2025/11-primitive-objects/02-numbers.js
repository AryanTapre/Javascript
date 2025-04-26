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


//FIXME: ROUNDINGS
console.log("Roundings ->");

console.log( Math.ceil(0.5) );
console.log( Math.floor(0.5) );
console.log( Math.round(0.5) );

let num2 = 12.34567890;
console.log(num2.toFixed(2));


//IMPORTANT:  SOME IMPRECISE CALCULATIONS...

console.log(0.1 + 0.2 == 0.3);
let sum = 0.1 + 0.2;

console.log(sum.toFixed(1)) ;



//NOTE: ParseInt and parseFloat

console.log( parseInt('100px') );
console.log( parseFloat('100.12') );



