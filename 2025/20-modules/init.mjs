import {AuthConfig as aryan} from "./auth.mjs"
import "./init2.mjs"


aryan.setUsername="aryantapre";
aryan.setPassword="12345";
console.log(aryan.getPassword);
console.log(aryan.getUsername);


console.log(import.meta);
const resolved = import.meta.resolve("./auth.mjs");
console.log(resolved);


function funcInit() {
    console.log("I'm function of init.mjs");    
}

export {
    funcInit
}
