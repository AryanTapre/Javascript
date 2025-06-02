import FormValidationPipeline from "./FormValidationPipeline.js"; 
import { EmailValidator, AgeValidator, AppResponse } from "./FormValidationPipeline.js";

function processForm(userInputData) {
    try {    
        const pipeline = new FormValidationPipeline();

        pipeline
            .addValidator(new EmailValidator("email", userInputData.email))
            .addValidator(new AgeValidator("age", userInputData.age));
            const isValid = pipeline.run();
        
        console.log("IS THERE ERROR EXISTS:", isValid);
        
        return pipeline.getResults(userInputData);        
    } catch (error) {
        console.error("Unexpected runtime errror in validation pipeline:", error.message);
        return new AppResponse(false, error.message, null, "Unhandled validation in error occured");
    }    

}

const userInputData = {
    email: "taprearyan7@gmail.com",
    age: 17
}

const result = processForm(userInputData);
console.log("Validation Results: ", result);
