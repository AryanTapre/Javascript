class AuthConfig {
    static #username;
    static #password;
    constructor(_username, _password) {
        
    }

   
    static set setUsername(username) {
        this.#username = username;
    }

    static set setPassword(passcode) {
        this.#password = passcode;
    }    

   
    static get getUsername() {
        return this.#username;
    }

    static get getPassword() {
        return  this.#password;
    }
}

export {
    AuthConfig 
}