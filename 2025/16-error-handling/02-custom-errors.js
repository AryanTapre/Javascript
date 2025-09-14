// NOTE: https://javascript.info/custom-errors

/**TODO: 
 *  let us define readUser function parsing JSON data received from Remote Sever
 *  wiht all Erroneous checks.
*/



class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }  

    getStack() {
        return this.stack;
    }
};


try {
    throw new ReadError("I don't know", "shit");
} catch (error) {
    console.log(`I'm here -> ${error}`);
    //console.log(Object.getOwnPropertyNames(error));
    Object.getOwnPropertyNames(error).forEach((property) => {
        console.log(`${property}: ${error[property]}`);
    })
        
}


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


function validateUser(user) {
    switch (user) {
        case !user.age:
            throw new PropertyRequiredError("age");
            break;
        case !user.name:
            throw new PropertyRequiredError("name");
            break;
    
        case !user.familyName:
            throw new PropertyRequiredError("familyName");
            break;

        default:
            throw new PropertyRequiredError("new prop missing");
            break;
    }
}

function readUser(jsonData) {
    let user;

    try {
        user = JSON.parse(jsonData);
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new ReadError("Syntax Error",error)
        } else {
            throw error;
        }
    }

    try {
        validateUser(user);
    } catch (error) {
        if (error instanceof ValidationError) {
            throw new ReadError("Validation Error", error);
        } else {
            throw error;
        }
    }
    
    return user;
}


// main code
try {
    readUser(dataFromServer);   
} catch (error) {
    if (error instanceof ReadError) {
        console.log(error);
    } else {
        throw error;
    }
}


new Error("roo",{cause},)