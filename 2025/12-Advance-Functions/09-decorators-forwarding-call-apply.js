// NOTE: https://javascript.info/call-apply-decorators



//IMPORTANT: CALL FORWARDING, DECORATORS
function logger(func) {
    return function(...arguments) {
        let time = new Date().getTime();
        console.log(`function called at: ${time}`);    
        func(...arguments);
        let newTime = new Date().getTime();
        console.log(`function called at: ${newTime}`);
        console.log("time taken : ", newTime - time );
    }
}

function callme(name) {
    console.log("My name is : ", name);
}

const x = logger(callme);
x("aryan");



// NOTE: Caching  

function slow(x) {
    return x;
}


// let worker = {
//     someMethod: function() { return 1 },
//     slow(x) {
//         return x * someMethod();
//     }
// };



// function cachingDecorator(func) {
//     let cache = new Map();
    
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     };
// }

//  const slowX = cachingDecorator(worker.slow);
//  console.log( slowX(10) );
// //console.log( slowX("Aryan boss") );



let Worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        return x * this.someMethod();
    }
};

function cachingDecorator(func) {
    let cache = new Map();

    return function(...arguments) {
        if (cache.has(...arguments)) {
            return cache.get(...arguments);
        }
        const result = func.call(this,...arguments);  // NOTE: call forwarding wiht all the arguments
        cache.set(...arguments, result);
        return result;
    };
}

 Worker.slow = cachingDecorator(Worker.slow);
console.log( Worker.slow(1));
