// NOTE: https://javascript.info/custom-errors

/**TODO: 
 *  let us define readUser function parsing JSON data received from Remote Sever
 *  wiht all Erroneous checks.
*/

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(message);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

let dataFromServer = `{
    "name": "Aryan",
    "familyName": "Tapre",
    
    "designation": "Software Engineer"
}`;

function readUser(jsonData) {
    let user = JSON.parse(jsonData);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    
    return user;
}

try {
    let user = readUser(dataFromServer);
} catch (error) {
    if (error instanceof PropertyRequiredError) {
        console.log("some properties was missing: " + error);
    } else if (error instanceof SyntaxError  ) {
        console.log("some syntax error : "+ error);
    } else {
        console.log(error);
        
    }
}



