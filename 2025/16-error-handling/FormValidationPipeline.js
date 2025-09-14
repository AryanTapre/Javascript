/**
 * Error Handling pipeline: User Input Validation
 * 
 * This validation pipeline is responsible for ensuring that user-provided input / datameets 
 * the application's integrity and business rule requirements.
 * 
 * Validation Rules:
 * - Email must follow a valid format (RFC-compliant patterns).
 * - Age must be 18 or older to meet minimum eligiblity criteria.
 * 
 * Throws: 
 * - Error("Age is below the allowed threshold")         -> when age < 18
 * - Error("Invalid email format")                       -> when email format incorrrect
 * 
 * Example Use Case:    
 * validateUserInput( {email: "example@domain.com", age: 21} );
 */

class AppResponse extends Error {
    constructor(success, error, data, errorMessage) {
        super(errorMessage);
        this.success = success;
        this.error = error;
        this.data = data;
        Error.stackTraceLimit;
        Error.captureStackTrace(this, this.constructor)
    }
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = ValidationError.prototype.constructor.name;
    }
}

// Base validator class
class Validator {
    constructor(field, value) {
        this._field = field;
        this._value = value;
    }

    validate() {
        throw new Error("Validate must be implemented");
    }
}

// Email Validator
class EmailValidator extends Validator {
    validate() {
        try {
            if (!this._value.includes("@")) {
                return new ValidationError(`Invalid ${this.field} to format.`);
            }
            return null;        
        } catch (error) {
            return new ValidationError(`Validation failed for ${this._field}: ${error.message}`);
        }    
    }
}

// Age Validator
class AgeValidator extends Validator {
    validate() {
        try {
            if (!this._value || this._value < 18) {
                return new ValidationError(`${this._field} must be 18 or above.`);
            }
            return null;
        } catch (error) {     
            return new ValidationError(`Validation failed for ${this._field}: ${error.message}`);
        }    
        
    }
}

// Form Validation Pipeline.
class FormValidationPipeline {
    constructor() {
        this.validators = new Array();
        this.errors = new Array();
    }

    addValidator(validator) {
        this.validators.push(validator);
        return this;
    }

    run() {
        this.errors = new Array(); // Reset error
        for (const validator of this.validators) {
            const error = validator.validate();
            if (error) {
                this.errors.push(error);
            }
        }
        return this.errors.length !== 0;
    }

    getResults(inputData) {
        if (this.errors.length > 0) {
            const errorMessages = this.errors.map(err => err.message).join("; ");
            console.error("Validation Error: ", errorMessages);        
            return new AppResponse(false, errorMessages, null, null);  
        }

        console.log("FORM SUBMITTED SUCCESSFULLY: ", inputData);
        return new AppResponse(true, null, inputData, null);
    }
}


// Usage
// function processForm(userInputData) {
//     const pipeline = new FormValidationPipeline();
//     pipeline
//         .addValidator(new EmailValidator("email", userInputData.email))
//         .addValidator(new AgeValidator("age", userInputData.age));
    
//     const isValid = pipeline.run();
//     console.log("IS THERE ERROR EXISTS:", isValid);
    
//     return pipeline.getResults(userInputData);
// }

// Example Usage
// const userInputData = { email: "taprearyan7@gmail.com", age: 16};
// const result = processForm(userInputData);
// console.log("final result: ", result);



export default FormValidationPipeline;
export {
    AppResponse,
    ValidationError,
    EmailValidator,
    AgeValidator,
    Validator,
}
