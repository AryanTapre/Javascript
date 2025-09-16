import {promisify} from 'util';



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


// function main(name, callback) {
//     this.name = name;
//     callback();
// }

// function promisify(func) {
//     return function(...args) {
//         return new Promise((resolve, reject) => {
//             function callback() {
//                 console.log("The data is :" + this.name);   
//             }
//             args.push(callback);
//             func.call(this, ...args);
//             resolve(this.name);
//         });       
//     };
// }


// let x = promisify(main);
// x("AryanTapre");


// new Promise(() => {
//     noSuchFunction();
// }).then(() => {})
// .catch((error) => {
//     console.log(`caught you, ${error.stack}`);
//     return "aryan";
// }).then((data) => {
//     console.log(data);
    
// })


// https://aes.shenlu.me/api/v1/species


function serveSpecies(error, data) {
    if (error) {
        console.error(error)  // Promise.reject()
        return;  
    }
    
    // Promise.resolve(data)

    //console.log(data);
    for (const element of data) {
        console.log(element);   
    }    
}

function loadSpecies(url, serveSpecies) {
    try {
        fetch(url)
            .then(result => result.json())
            .then(objectData => serveSpecies(null, objectData))  
            .catch(error => serveSpecies(error, null))
    } catch (error) {
        console.error(`loadSpecies Error : ${error}`);
    }
}

//loadSpecies('https://aes.shenlu.me/api/v1/species', serveSpecies);




function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(error, result) {
                if (error) reject(error);
                resolve(result);
            }
            args.push(callback);
            func.call(this, ...args);
        });
    };
}

const loadedSpecicesPromise  = promisify(loadSpecies);
const promise = loadedSpecicesPromise('https://aes.shenlu.me/api/v1/species');
promise
    .then(serveSpecies)
    .catch(error => console.error(error));

// function serveSpecies(data) {
//     //console.log(data);
//     for (const element of data) {
//         console.log(element);   
//     }    
// }

// function loadSpecies(url) {
//     return fetch(url)
//         .then(result => result.json())    
// }

// const loadedSpecices = loadSpecies('https://aes.shenlu.me/api/v1/species');
// loadedSpecices
//     .then(serveSpecies)
//     .catch(error => console.log(`there is an error : ${error}`)) 