//NOTE: https://javascript.info/async-iterators-generators

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.asyncIterator](){
//         return {
//             current: this.from,
//             last: this.to,

//             async next() {
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true }
//                 }
//             }
//         }; 
//     }
// };



// (async () => {
//     for await (let value of range) {
//         console.log(value);
//     }
// })()


// ASYNC sequence ganerator...

// async function* sequenceGenerator(start, end) {
//     for (let i = start; i<= end; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         yield i;
//     }
// }

// async function values() {
//     const sequence = sequenceGenerator(10, 20);
//     for await (let val of sequence) {
//         console.log(val);
//     }
// }
// values();


//===================== REAL WORLD EXAMPLES=======================================

const githubUsernames = [
    {
        username: "AryanTapre"
    },
    {
        username: "hkirat"
    },
    {
        username: "piyushgarg-dev"
    }
];


async function* fetchUsers(githubUsernames) {
    const url = `https://api.github.com/users/`;

    for (const element of githubUsernames) {
        const apiEndPoint = url.concat(element.username);
        const response = await fetch(apiEndPoint);
        const data = await response.json();
        yield data;
    }
}

// (async() => {
//     for await (const user of fetchUsers(githubUsernames)) {
//         console.log(user);    
//     }
// })();

(async() => {
    const iterator = fetchUsers(githubUsernames);
    let result = await iterator.next();
    
    while(!result.done) {
        console.log(result);
        result = await iterator.next()    
    }
    
    
})();

