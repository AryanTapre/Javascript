function makeCounter() {
    function counter() {
        return counter.count++;
    }
    counter.count = 0;
    return counter;
}

let counter = makeCounter();
console.log( counter() );
counter = null;
counter = new makeCounter();
console.log( counter() );
console.log( counter() );



// FUNCTION PROPERTIES , name, lenght

function sayHi(name, rollno = 1234) {
    console.log(name + rollno);
}
sayHi("aryan")
console.log("name is :" + sayHi.name );
console.log("length is :" +  sayHi.length );


/** TODO:
 * Modify the code of makeCounter() so that the counter can also decrease and set the number:

    counter() should return the next number (as before).
    counter.set(value) should set the counter to value.
    counter.decrease() should decrease the counter by 1.

 * 
 */

function createCounter() {
    let count = 0;
    function counter() {
        return count++;
    }

    counter.set = value => count = value;
    counter.decrease = () => --count;
    return counter;
}

let x = new createCounter();
console.log( x() );
console.log( x() );
x.set(10);

console.log( x() );

 



