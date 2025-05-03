// NOTE: https://javascript.info/prototype-inheritance

//console.log( Object.getPrototypeOf(this) ); // points to NULL

function outer() {
    const outer = "outer";

    function demo() {
        let proto = this;
        while( (proto = Object.getPrototypeOf(proto)) != null ) {
            console.log(proto);
        }
        if(proto == null) {
            console.log(proto);
        }   
    }
    demo();   
}
outer();

console.log("==> \n");

let vehicle = {
    noOfWheels : null,
    buildQuality:  null,
    engine : null,
    mileage: "13.3"
};

let car = {
    transmissionType: null,
    carType: null,
    fuelType: null,
    carName: null

};

let fortuner = {
    carName: "fortuner",
    transmissionType: "manual",
    carType: "SUV",
    fuelType: "diesel",
    noOfWheels: "four",
    buildQuality: "super",
    
   
};

Object.setPrototypeOf(car,vehicle);
Object.setPrototypeOf(fortuner, car);

for (const key in fortuner) {
    console.log(`${key} = ${fortuner[key]}`);
    
    let isOwn = fortuner.hasOwnProperty(key);
    if (isOwn) {
        console.log("our:", key);
    } else {
        console.log("Not our: ", key);
    }
}


