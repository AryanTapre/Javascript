//NOTE: https://javascript.info/proxy

//TODO: THE "GET" TRAP HANDLER

let numbers = [0, 1, 3, 90];

numbers = new Proxy(numbers, {
    get(target, prop, receiver) {
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        } else {
            return "NaN";
        }
    }
});

console.log(numbers[4]);


// VALIDATION WITH "SET" TRAP HANDLER
// myNumbers should only consists of number 
let myNumbers = [];
myNumbers = new Proxy(myNumbers, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});


myNumbers.push(1);   



// OWNKEYS 
// RETURNS ALL THE PROPERTIES EXCEPT THAT STARTS WITH  _ ( UNDERSCOR ) 
const ID = "DIS";
let user = {
    name: "Johnny",
    age: 30,
    _password: "*****",
    [ID]: "id"
}

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => {
            console.log(`...processing key is...: ${key}`);
            return !key.startsWith('_');
        })
    }
})

for (const key in user) {
    console.log(key);
}


// TODO: USER PROXIES TO DO THE FOLLOWING.
/**
    1.  "get" to throw an error when reading such property,
    2.  "set" to throw an error when writing,
    3.  "deleteProperty" to throw an error when deleting,
    4.  "ownKeys" to exclude properties starting with _ from for..in and methods like Obje
 * 
 */

let userx = {
    firstName: "aryan",
    lastName: "tapre",
    _passcode: "Ar24090w9wrwfewfw324",
    hola: function() {
        console.log("hello sir,"+ this.firstName); 
    }
};

userx = new Proxy(userx, {
    get(target, prop, receiver) {
        if (prop.startsWith('_')) throw new Error("Access-Denied");
        const value = target.prop;
        return (typeof value === 'function') ? value.bind(receiver) : value;
    },

    set(target, prop, val) {
        if (prop.startsWith('_')) throw new Error("ACCESS DENIED");
        target.prop = val;
        return true;
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('_')) throw new Error("ACCESS DENIED");
        delete target[prop];
        return true;
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith("_"));
    }
});

try {
    userx._passcode = "adadads";
    
} catch (error) {
    console.log(`${error.message} :  ${error.stack}`);   
}


// WORKING WITH "IN"

let range = {
    from: 1,
    to: 5
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.from && prop <= target.to;
    }
});

console.log( 5 in range);

//======================================

let userY = {
    _name: "Guest",
    get name() {
        return this._name;
    }
};

let user_proxy = new Proxy(userY, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }   
});

let admin = {
    _name: "admin"
};
Object.setPrototypeOf(admin, user_proxy);

console.log(admin.name);

//========================= REAL WORLD=================================

const usery = {
    name: "Aryan",
    greet() {
        return `Hi, ${this.name}`;
    }
};

const useryHandler = {
    get(target, prop, receiver) {
        console.log(`Accessed ${prop}`);

        return Reflect.get(target, prop, receiver);
    }
}

const proxy = new Proxy(usery, useryHandler);
console.log(proxy.greet());




/**  Whether Web App - Fetches Based On Location
 *   URL:
 *      https://api.weatherapi.com/v1/current.json?key=cf472f1d99374a7693a112657250806&q=Surat&aqi=nov
 * 
 *   TOPIC COVERED: CURRYING to Fix some parameters such as domain, key cause' they are repeative. 
 */

function fetchData(baseURL, apiVersion, endPoint, apiKey, query) {
      return fetch(`${baseURL}/${apiVersion}/${endPoint}${apiKey}&q=${query}`)
                .then(res => res.json());       
}

function curryWhether(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

fetchData = curryWhether(fetchData);
let API = fetchData(`https://api.weatherapi.com`, `v1`, `current.json?key=`,`cf472f1d99374a7693a112657250806`);

API("Surat")
    .then(data => console.log(data));
