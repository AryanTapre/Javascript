import FormValidationPipeline from "./FormValidationPipeline.js"; 
import { EmailValidator, AgeValidator } from "./FormValidationPipeline.js";

function processForm(userInputData) {
    const pipeline = new FormValidationPipeline();
    pipeline
        .addValidator(new EmailValidator("email", userInputData.email))
        .addValidator(new AgeValidator("age", userInputData.age));
    
    const isValid = pipeline.run();
    console.log("IS THERE ERROR EXISTS:", isValid);
    
    return pipeline.getResults(userInputData);
}

const userInputData = {
    email: "taprearyan7@gmail.com",
    age: 17
}

const result = processForm(userInputData);
console.log("Validation Results: ", result);
