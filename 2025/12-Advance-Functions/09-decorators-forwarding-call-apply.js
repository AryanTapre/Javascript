// NOTE: https://javascript.info/call-apply-decorators

/**
 * CALL FORWARDING,
 * Passing all the arguments along with context to another function is called 'Call Forwarding'.
 */

//IMPORTANT: CALL FORWARDING, DECORATORS
function logger(func) {
    return function(...arguments) {
        if (this === globalThis) {
            console.log("this pointing to global obj");            
        } else {
            console.log("this points to an object");
        }

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
    let i = 0;
    while (i <= 1000) {
        i++;
    }
    console.log("execution of callme() accomplished!.");
    
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
        if (this === globalThis) {
            console.log("this pointing to global obj");            
        } else {
            console.log("this points to an object");
        }

        if (cache.has(...arguments)) {
            return cache.get(...arguments);
        }
        const result = func.call(this,...arguments);  // NOTE: call forwarding with all the arguments
        cache.set(...arguments, result);
        return result;
    };
}

Worker.slow = cachingDecorator(Worker.slow);
console.log( Worker.slow(1));


function greet(name) {
  console.log(`Hola, ${name}`);
  
}

function throttle(func, delayInMs) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delayInMs) {
      console.log(`now: ${now} \n lastcall: ${lastCall}`);
      lastCall = now;      
      func.apply(this, args); // NOTE: Call Forwarding...
    }
  };
}

let greetme = throttle(greet, 5000);
setInterval(() => {
  greetme("aryantapre");
},5000)




