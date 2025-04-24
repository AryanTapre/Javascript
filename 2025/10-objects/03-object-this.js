console.log(this);

function callme() {
    let x = "hola";
    console.log(this);
}
callme();

let user1 = {
    name: 'aryan'
};

let user2 = {
    name: 'panvi'
};

function sayHi() {
    console.log(this.name);
    console.log(this);
    
};
user1.f = sayHi;
user2.f = sayHi;

user1.f();
user2.f();

// const englishContraction =  {
//     ["y'all"] : "you all",
//     ["gotta"] : "got it / have to",
//     getGrammer : function() {
//         let arrow = () => console.log(this);
//         arrow();
//     }
// }
// englishContraction.getGrammer();


const EnglishContraction = function() {
    this["y'all"] = "you all",
    this["gotta"] = "got it / have to",
    this.getGrammer = function() {
        const arrow = () => console.log(this);
        arrow();
    }
    return this;
}
    
const obj = new EnglishContraction();
obj.getGrammer();


function User() {
    console.log(new.target);   
}
User();
new User();