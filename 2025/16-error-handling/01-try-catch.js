// NOTE: https://javascript.info/try-catch

try {
    console.log(pop);
    console.log("this is aryan here");

} catch (error) {
    console.log("error-name => " +  error.name);
    console.log("error-message => " + error.message);
    console.log("error-stack => " +  error.stack);   

} finally {
    console.log("come towards end...");
}



// NOTE: BUILDING CUSTOM ERRORS...
console.log("Custom Error Building ==> \n"); 


let jsonData = {
    "name" : "ARYAN_TAPRE",
}; 




try {
    if (!jsonData.name) {
        throw new SyntaxError("jsonData error");
    }
    console.log(aryan);

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("JSON ERROR : " + error);
        console.log(error.stack);
              
    } else {
        console.log("SOME ERROR : " + error);
    }
}


// IMPORTANT: GLOBAL CATCH...

console.log(rocket);


process.on("uncaughtException", (error) => {
    console.error("Uncaught exception : ", error)
})


// window.onerror = function(message, url,line, columnNo, error) {

// }

// <script>
//   window.onerror = function(message, url, line, col, error) {
//     alert(`${message}\n At ${line}:${col} of ${url}`);
//   };

//   function readData() {
//     badFunc(); // Whoops, something went wrong!
//   }

//   readData();
//</script>