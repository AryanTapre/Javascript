let greetingMixins = {
    goodMorning() {
        console.log("good morning sir / madam");
        
    },
    goodEvening() {
        console.log("good evening is sir / madam");
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, greetingMixins);

const u  = new User("aryantapre");
u.goodEvening();

console.log(User.prototype);

let A = {
    name: "A",
    last: "last A"
}


const B = Object.create(Object.getPrototypeOf(A), Object.getOwnPropertyDescriptors(A));

A.hello = "hello";

console.log(A);
console.log(B);


//=================================REAL WORLD USE-CASE================================

const  Ax =  {
    first() {
        console.log("first");
    }
}

const  Bx =  {
    second() {
        console.log("second");
    }
}


class Cx {}

Object.assign(Cx.prototype, Ax, Bx)

cx = new Cx();

cx.first();
cx.second();







