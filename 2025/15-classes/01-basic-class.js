//NOTE: https://javascript.info/class

class User {
    constructor(name) {
        this.name = name;
        this.dance = true;
        //this.sayHi = this.sayHi.bind(this);
    }  
    sayHi() {
        console.log(this.name);      
    }
};

console.log(typeof User); // Function
console.log(User.prototype.constructor === User);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));

User.prototype.aryan = function() {
    console.log("this is " + this.name);   
}


let user = new User("aryan");
user.sayHi();


user.aryan();

//console.log(User.IsClassConstructor);

class Button {
    constructor(value) {
        this.value = value;
//        this.click = this.click.bind(this)
    }

    click = () => {
        console.log(`this inside click method: ${Object.getOwnPropertyNames(Button.prototype)}`);        
        console.log("button clicked:" + this.value);
    }
}

let button = new Button("Register");
setTimeout(button.click, 1000);

console.log(Object.getOwnPropertyDescriptors(Button));
