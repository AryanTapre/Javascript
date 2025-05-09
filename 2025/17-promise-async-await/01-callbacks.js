// NOTE: https://javascript.info/callbacks

function loadData(name, callback) {
    this.name = name;
    Object.hasOwn(this, "name") ? callback(null, this.name) : callback("failed to access property", null);
}

loadData("frontman", function (error, result) {    
    if (error) {
        console.log(`there was an error : ${error}`);   
    }
    else {
        console.log(`the data is : ${result}`);
    }
});
