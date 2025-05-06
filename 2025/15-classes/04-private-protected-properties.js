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

