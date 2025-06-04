// NOTE: https://javascript.info/promise-basics

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("yes");
    },1000)
});


promise.catch((err) => console.log(`error is : ${err}`))
.then((result) => {
    console.log("result:" + result);
})


function loadData(name) {
    this.name = name;
    return new Promise((resolve, reject) => {
        console.log("value of this:", this);
        
        Object.hasOwn(this, "name") ? resolve(name) : reject(new Error("property was missing!"));
    });
}

let results = loadData("aryantapre");
results
    .then((data) => console.log("Got data: "+ data))
    .catch((error) => console.log("Got Error: "+ error))


//================== UNDERSTADING PROCMISES=======================


// function getUsers(url, callback) {
//     setTimeout(() => {
//         console.log("...got users from remote host... ", url);
//         callback(null, {name: "aryan tapre", age: 22});
//     },1000);
// }

// getUsers("https://google.com/users/", function notifyUsers(err, data) {
//     if (err) {
//         console.log("ERROR_OCCURED: ", err);        
//     } else if (data) {
//         console.log("RECEIVED DATA: ", data);
//     }
// });


function getUsers(url) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( {name: "aryantapre", age:22, url} );
        },1000); 
    });
    
    return promise;
}

getUsers("https://google.com/users")
    .then((data) => console.log(`RECEIVED DATA: ${data}`))
    .catch((err) => console.error(`RECEIVED ERROR : ${err}`))





//=========== HANDLING REAL-WORLD-DATA FROM GITHUB====================

function getGithubUser(username) {
    const url = `https://api.github.com/users/${username}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Github API ERROR: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(`Github User Data Received: ${JSON.stringify(data, null, 2)}`);
            // for (key in data) {
            //     console.log(`${key} : ${data[key]}`);
                
            // }
        })
        .catch((error) => {
            console.log(`Faild to fetch Github User Data: ${error}`);
        })
}

getGithubUser("AryanTapre");
