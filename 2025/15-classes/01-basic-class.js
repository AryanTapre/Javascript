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

setTimeout(function()  {
    user.sayHi();
    
}, 100);



function UserX(name) {
    this.name = name;
    this.hello = function sayHi() {
        console.log(this.name);
        
    }
}

