// https://javascript.info/string

let single  = 'single string';
let double = "double string";
let backticks = `hello, ${double}`;

let groceryList = `Apple,
Avocados
`;
console.log(groceryList);


//FIXME:  SPECIAL CHARACTERS (Escape characters)

console.log( " \"Aryan Tapre\" \\ operating \t systems " );
// \n \r \' \" \`  \\ \t \b \f \v


//FIXME: string length
console.log( "aryan".length );


//FIXME: Accessing characters

console.log(single[2]);
console.log(single.at(2));


//FIXME: Changing The Case
console.log("Aryan".toLocaleUpperCase());
console.log("Tapre".toUpperCase());


//FIXME: Searching a string

console.log(single.indexOf("string"));
console.log(single.includes("string"));
console.log(single.startsWith("string",2));
console.log(single.endsWith("string",1));


//FIXME: Getting a substring
console.log(single.slice(0, 5));
console.log(single.substring(0, 5));



//FIXME: STRING COMPARISIONS

const s1 = new String("aryan");
const s2 = new String("aryan");

console.log(s1.localeCompare(s2));


//TODO: 1 Write a function ucFirst(str) that returns the string str with the uppercased first character,

function ucFirst(str) {
    return str.at(0).toUpperCase() + str.slice(1);
}

console.log( ucFirst("tapre") );


//TODO: 2 Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

function checkSpam(str) {
    const lowerBase = str.toLowerCase();
    return lowerBase.includes("viagra") || lowerBase.includes("xxx");
}

console.log( checkSpam("Aryan viag XXX") );


//TODO: 3 Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "..." : str;
    // if (str.length > maxlength) {
    //     let slicedString = str.slice(0,maxlength - 1);
    //     slicedString =  slicedString + "...";
    //     return slicedString;
    // }
    // return str;
}

console.log( truncate("aryantapre", 3) );

//TODO: 4 We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
    return parseInt( str.slice(1) );
    
}    

 console.log( extractCurrencyValue("$120") === 120 );



