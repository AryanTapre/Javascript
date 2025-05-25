//NOTE: https://javascript.info/property-accessors

let user = {
    get fullName() {
        return `${this.name} ${this.familyName}`;
    },

    set fullName(fullName) {
        [this.name, this.familyName] =  fullName.split(" ");
    }
};

user.fullName = "Aryan Tapre";
console.log( user.fullName );


// NOTE:
let user2 = {
    name: "John",
    surname: "Smith",
};

Object.defineProperty(user2, "fullname", {
    get() {return this.fullName},
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
})


// NOTE:
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date("2002-07-24"));

console.log( john.birthday ); // birthday is available
console.log( john.age ); 


