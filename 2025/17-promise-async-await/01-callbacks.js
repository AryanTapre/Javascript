// NOTE: https://javascript.info/callbacks

// function loadData(name, callback) {
//     this.name = name;
//     Object.hasOwn(this, "name") ? callback(null, this.name) : callback("failed to access property", null);
// }

// loadData("frontman", function (error, result) {    
//     if (error) {
//         console.log(`there was an error : ${error}`);   
//     }
//     else {
//         console.log(`the data is : ${result}`);
//     }
// });


//+======++++++++==== REAL WORLD =============================

function fetchData(url, callback) {
    console.log("...inside fetchData() function...");

    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(err => callback(err, null))

}

fetchData("https://api.github.com/users/AryanTapreeerr", (err, data) => {

    console.log("... inside fetchData() callback");
    
    if (err) {
        console.log(`GOT THE ERROR: ${err}`);        
    } else {
        console.log(`GOT THE DATA: ${data}`);
    }
});


console.log("aryan tapre");

function hola() {
    console.log("hola to you sir...");
} 
hola();
