//NOTE: https://javascript.info/optional-chaining

const UserStatus = function() {
    this.name = "aryan";
    this.address = {
        street: null,
        area: null,
    };
    this.isAuth = {
        google: {
            value: null
        },
        facebook: null,
        x: null,
        github: null,
        microsoft: null,
    };
}

const userStatus = new UserStatus();
console.log(userStatus);
console.log(userStatus.isAuth?.google?.value ?? undefined); 

const user = {
    profile: {
        name: "Aryan",
        social: {
            twitter: "@aryant_x"
        }
    }
};

const instagram = user.profile?.social.instagram ?? "Not Linked";
console.log(instagram);

console.log(user.address);

