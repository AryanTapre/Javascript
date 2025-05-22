/** IMPORTANT:
 *  There is an build-in array-like object named 'arguments'
 *  Only Accessible in Regular function
 *  
 */

function showMyName(name) {
    console.log( this );
    
    let argsArray = Array.from(arguments);
    console.log(argsArray);
      
    console.log(name);    
}

showMyName("aryan");

// NOTE: ... REST PARAMETER

console.log("Rest Parameter -> \n ");

function getUserDetails(...users) {
    console.log( Array.isArray(users) );
    for (let user of users) {
        console.log(user);   
    }
}

getUserDetails("aryan","harshad","ashwin","elon musk");


// NOTE: ...SPREAD SYNTAX (Arguments)

let numbers = [45, 12, 89, 56, 17];
console.log( Math.min(...numbers) );

console.log( Math.max(...numbers) );



let users = {
    firstName: "aryan",
    lastName: "tapre",
    middleName: "sanjay",
    email: "taprearyan7@gmail.com",
    link: "www.aryantapre.in"
};

let user2 = { ...users };

user2.holae = function() {
    console.log("hola from JS");
}

user2.holae();


// TODO: Real World use case for REST, SPREAD...
/**
 *  Building a shopping cart system
    Let's say we want to:
    1.  Add any number of items to a shopping cart (Rest)
    2.  Combine multiple carts together (Spread)
 */

function addToCart(customerName, ...cartItems) {
    console.log(`Customer name ${customerName} is like to order the followings \n`);
    console.log(cartItems);   
}

addToCart("Aryan Tapre", "laptop","mouse","T-shirt","foot wear", "Wrist watch");
    

let xop = {
    name: "raju",
    age: 22,
    length: 2,
};

const dt = Array.from(xop);

for (let x of dt) {
    console.log(x);
}


// const RESOURCE = "https://google.com/search?q=elon+musk"

// consumeResource();

// function consumeResource() {
//     console.log(`resource = ${RESOURCE}`);
// }






function consumeResource() {
    x = {
        name: "x",
        age: "x1",
    }
    return function() {
        console.log("name = ", this.x.name);
        console.log("age =  ", this.x.age);        
    }
}

const registry = new FinalizationRegistry((x="I'm no more") => {
    console.log(x);
})



let data = consumeResource();
registry.register(data);
data = null;



