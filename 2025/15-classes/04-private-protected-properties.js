// NOTE: https://javascript.info/private-protected-properties-methods

class CoffeeMachine {
    #power;
    #waterAmount;
    #WATER_LIMIT;
    _hero; // Protected property:  private + access only by derive class Obj
    #status;

    constructor(power = 0) {
        this.#power = power;
        this.#WATER_LIMIT = "100ml";
        this.#waterAmount = "0ml";
        this.#status = "inactive";
    }
    
    set waterAmount(waterAmount) {
        this.#waterAmount = (waterAmount > this.#WATER_LIMIT) ? 0 : waterAmount;
    }
    
    get waterAmount() {
        return this.#waterAmount;
    }

    get power() {
        return this.#power;
    }

    start() {
        this.#power = 100;
        this.#status = "active";
    }
    stop() {
        this.#power = 0;
        this.#status = "inactive";
    }

    get status() {
        return this.#status;
    }
};

const nescafeE = new CoffeeMachine(100);
nescafeE.waterAmount = "100ml";
console.log(nescafeE.status);

nescafeE.start();

console.log(nescafeE.power);
console.log( nescafeE.status );


//++++++++++++++++++++++++++++ REAL WORLD USE CASE+++++++++++++++++++++++++++++++++++++++++++

class User {

    _role = null;
    #password = null;
    username = null;
    
    constructor(username, password) {
        if (this._validatePassword(password)) {
            this.username = username;
            this.#password = password;
            this._role = "USER";
        } else {
            throw new Error("Password is TOO SHORT, atleast 8 characters...");
        }
    }

    _validatePassword(password) {
        return password.length >= 8;
    }

    #resetPassword(newPassword) {
        this.#password = newPassword;
    }

    resetPassword(oldPassword, newPassword) {
        if (oldPassword !== newPassword) {
            if (this._validatePassword(newPassword)) {
                this.#resetPassword(newPassword)
            }
            
        } else {
            throw new Error("Same as OLD password, TRY AGAIN!");   
        }
    }

}

let aryan = new User("aryantapre", "12345678");
console.log(Object.getOwnPropertyDescriptors(aryan));


