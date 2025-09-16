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

fetchData("https://api.github.com/users/AryanTapre/", (err, data) => {

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



//==============================================
function loadScript(scriptURL, callback) {
    const script = document.createElement('script');
    script.src = scriptURL;
    script.onload = () => {
        callback(script);        
    }
}

loadScript("https://scripts.aryantapre.in/v1/auth.js",(script) => {
    console.log(script);

    loadScript("https://google.com/", (script) => {
        loadScript("https://aryantapre.github.io", (script) => {

        } );           
    })
})


//NOTE: Error-first callback style
function loadScript2(scriptURL, callback) {
    const newScript = window.document.createElement("script");    
    newScript.src = scriptURL;

    newScript.onload = () => {
        callback(null, newScript); // Successfull loading of newScript.
    }
    newScript.onerror = () => {
        callback(new Error("some error",{ cause: "cause"}));
    }
}


loadScript("1.js",(error, script) => {
    if (error) {
        handleError(error);
    } else {
        loadScript("2.js", (error, script) => {
            if (error) {
                handleError(error);
            } else {
                loadScript("3.js", (error, script) => {
                    if (error) {
                        handleError(error);
                    } else {
                        loadScript("4.js", (error, script) => {
                            if (error) {
                                handleError(error);
                            } else {
                                loadScript("5.js", (error, script) => {
                                    if (error) {
                                        handleError(error);
                                    } else {
                                        loadScript("6.js", (error, script) => {
                                            if (error) {
                                                handleError(error, script);
                                            } else {
                                                loadScript("7.js", (error, script) => {
                                                    if (error) {
                                                        handleError(error);
                                                    } else {
                                                        loadScript("8.js", (error, script) => {
                                                            if (error) {
                                                                handleError(error);
                                                            } else {
                                                                loadScript("9.js", (error, script) => {
                                                                    if (error) {
                                                                        handleError(error);
                                                                    } else {
                                                                        loadScript("10.js", (error, script) => {
                                                                            if (error) {
                                                                                handleError(error);
                                                                            }
                                                                            console.log("THE END GAME!!!!");
                                                                            
                                                                        })
                                                                    }
                                                                }) 

                                                                
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});