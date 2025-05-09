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

