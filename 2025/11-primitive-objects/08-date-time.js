//https://javascript.info/date

let now =  Date();
console.log(now);

let nowx = new Date();
console.log(nowx);

let Dec311969 = new Date(-24 * 3600 * 1000); // Dates before January 1, 1970. i.e 31st december, 1969  
console.log(Dec311969);

/**NOTE: TIMESTAMP
 *  A number of milliseconds that has passed since the beginning of Jan 1st of  1970s is called "TimeStamp".
 */

console.log(new Date().getFullYear());

let customDate = new Date();
console.log(customDate);
 
// Accessing all date components..
console.log( customDate.getFullYear() );
console.log( customDate.getMonth() );
console.log( customDate.getDate() );
console.log( customDate.getDay() );
console.log( customDate.getHours() );
console.log( customDate.getMinutes() );
console.log( customDate.getSeconds() );
console.log( customDate.getTime() );


console.log( ((Math.random() * 4 )  ).toFixed(0) );

let today =  new Date();
today.setFullYear(2025, 3, 30);
today.setHours(19, 30, 48);
console.log(today);
console.log( today.getDate() );


// DATE TO NUMBER....

let newDate = new Date();
console.log(+newDate);

console.log( Date.parse("2024-07-25T00:12:45") );

const currentVal = new Date();

console.log(`${currentVal.getHours()} H : ${currentVal.getMinutes()} M : ${currentVal.getSeconds()} S`);


console.log(Date.now());

let arDate = new Date("2025-09-08");
console.log(arDate.getUTCFullYear());

//==================================*********************==============================


console.log("dealing with time...");
const dateNow = new Date();
console.log(dateNow);
console.log( dateNow.getHours() );








