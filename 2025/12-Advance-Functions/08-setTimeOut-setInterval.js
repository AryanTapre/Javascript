//NOTE: https://javascript.info/settimeout-setinterval

const timerId1 = setTimeout(function(...data) {
    console.log("timer 1 called");
    console.log(data);
    
    
}, 5, "aryan","tapre");

console.log("timerId1 : ", timerId1);

//clearTimeout(timerId1);   IMPORTANT: TO CANCEL SetTimeOut call


//NOTE: WORKING WITH setInterval() function

const timerId2 = setInterval(function() {
    console.log("Sending request to the server,,,");
    
}, 100);

clearInterval(timerId2);


// find deplays between Intervals
let start = Date.now();
let times = [];

setTimeout(function run() {
    times.push( Date.now() - start );
    
    if (start + 100 < Date.now()) {
        console.log(times);
    } else {
        setTimeout(run, 0);
    }
},0)




// FUNCTION CACHING 
function slow(x) {
    console.log(`slow() called with value : ${x}`);
    return x;
}

function wrapperCacheSlow(func) {
    let cache = new Map();
    
    return function(x) {
        if ( cache.has(x) ) {
            return cache.get(x);
        } 
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

const one = wrapperCacheSlow(slow);
console.log( one(1) );
console.log( one(1) );

