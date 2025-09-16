// NOTE: https://javascript.info/async-await


async function func(name) {
    return name + "!";
}

const promise = func("Aryan");
promise.then((data) => {console.log(data)});


// Define a function for database connection with URL as argument (parameter)...

async function connectDB(URL) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("...connected..to..database... : "+ URL);
        }, 1000);
    });
}


const dbValue =  await connectDB("https://database.server.com:5500");
console.log(dbValue);

console.log("Line after connectDB() function");


/** TODO: A
 *  Rewrite using async/await
    Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

    code:
        function loadJson(url) {
        return fetch(url)
            .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
            });
        }

        loadJson('https://javascript.info/no-such-user.json')
        .catch(alert); // Error: 404 
 */

async function loadJson(url) {
    
    const data = await fetch(url);
    if (data.status == 200) {
        return await data.json();
    } 
    
    throw new Error(data.status);
}

try {
    const value = await loadJson("https://javascript.info/no-such-user.json");
    console.log("The value is : " + value);

} catch (error) {
    console.log("caught the error : "+ error);   
}



// TODO: B

class HttpError extends Error {
    constructor(responsce) {
        super(`${responsce.status} for ${responsce.url}`);
        this.name = `HTTP_ERROR`;
        this.response = response;
    }
};

async function loadJSON(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    let name = prompt(`Enter a name ?`, 'AryanTapre');
    while (true) {
        try {
            name = await loadJSON(`https://api.github.com/users/${name}`);
            break;
        } catch (error) {
           if (error instanceof HttpError && error.response.status == 400) {
                alert("No such user exists here.");
           }  
           throw error;    
        }
    }
    alert(`full name is : ${user.name}`);
    return user;
}

let data = await demoGithubUser();
console.log(data);


