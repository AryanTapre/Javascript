//NOTE: Baisc of primitive

let myString  =   String("AryanTapre");
let myNumber  =   Number(24072002);
let myBigInt  =   BigInt(12127832347283467267472637462376427364723423423434);
let myBoolean =  Boolean(true);
let mySymbol  =   Symbol("idx101"); 

let myString1  =   new String("AryanTapre");
let myNumber1  =   new Number(24072002);
let myBigInt1  =   BigInt(12127832347283467267472637462376427364723423423434);
let myBoolean1 =   new Boolean(true);
let mySymbol1  =   Symbol("idx101"); 


console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBigInt);
console.log(typeof myBoolean);
console.log(typeof mySymbol);
console.log(typeof null);
console.log(typeof undefined);


console.log( myString.valueOf() );
console.log( myNumber.valueOf() );
console.log( myBoolean.valueOf() );
console.log( myBigInt.valueOf() );
console.log( mySymbol.valueOf() );




/*TODO: 1 Consider thw following code
    let str = "Hello"
    str.test = 5;
    console.log(str.test);
*/

//IMPORTANT: pRIMITIVES ARE NOT THE OBKJECTS JUST A TEMPORARY WRAPPER OBJECT

let str = "Hello";
str.test = 5;
console.log("Todo1 ->");
console.log(str.test);





console.log(isNaN("123"));
