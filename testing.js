function readUserName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
} 

function readUserNameWrapper(func) {
    return function(...args) {
        console.log("before calling readUserName() function...");

        func.call(this, ...args);
        
        console.log("after calling readUserName() function...");
    }
}

const x = readUserNameWrapper(readUserName);
x("Aryan", "Tapre");


