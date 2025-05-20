// NOTE: String Conversion
let value = true;
value = String(value);
console.log(typeof value);

// NOTE: Numeric Conversion
let strValue = "1";
strValue = Number(strValue);
console.log(strValue + 10);
console.log(typeof strValue);


// NOTE: Boolean Conversion
console.log(Boolean(1)); //         true
console.log(Boolean(0)); //         false
console.log(Boolean("hello")); //   true
console.log(Boolean("")); //        false


let counter = 1;
console.log(2 * ++counter);  //  2*2
console.log(2 * counter++); // 2-1



false || console.log("called true");
false || console.log("called true");


if ("0" === 0) {
    console.log("yes");
    
} else {
    console.log("no");
}


console.log( 1 <= 0 );



let age = 18;
let message;

if (age < 13) {
    message = "Hi, baby!";
} else if (age < 18) {
    message = "Hello";
} else if (age < 100) {
    message = "Greetings";
} else {
    message = "What an usual age!";
}



