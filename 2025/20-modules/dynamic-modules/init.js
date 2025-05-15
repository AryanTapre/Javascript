
let user = {
    name: "aryan",
    age: 22,
    value: "300m"
}

if (user) {
   const result = await import(import.meta.resolve("./modules/User.js"));
   result.printUser(user);  
}



