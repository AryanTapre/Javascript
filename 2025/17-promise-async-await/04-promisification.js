//NOTE: https://javascript.info/promisify

// function callback() {
//     console.log(`The name is : ${this.name}`);
// }

// function main(name, callback) {
//     this.name = name;
//     callback();
// }

// main("Aryan", callback);


// function promisify(func) {
//     return function(...args) {
//         return new Promise((resolve, reject) => {
//             function callback() {
//                 console.log(`The data is : ${this.name}`);   
//             }

//             args.push(callback);
//             func.call(this, ...args);
//             resolve(this.name)
//         });    
//     };
// }

// function main(name, callback) {
//     this.name = name;
//     callback();
// }


// const proMain = promisify(main);
// proMain("AryanTapre").then((d) => console.log("x:" + d))


function main(name, callback) {
    this.name = name;
    callback();
}

function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback() {
                console.log("The data is :" + this.name);   
            }
            args.push(callback);
            func.call(this, ...args);
            resolve(this.name);
        });       
    };
}


let x = promisify(main);
x("AryanTapre");








