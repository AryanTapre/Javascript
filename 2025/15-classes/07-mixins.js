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



//--------------------------------------------------


const timeStampMixin = {
    setCurrentTimeStamp(timeStampField) {
        this.metaData[timeStampField] = `${new Date().toLocaleDateString()}:T${new Date().toLocaleTimeString()}`    
        
    }
}

class Post {
    #content;
    #postType;
    metaData = {};
    constructor() {
        this.#postType = "collage"
        this.metaData = {
            "createdAt": null,
            "updatedAt": null,
            "deletedAt": null
        }
    }

    create(content) {
        this.#content = content;
        this.setCurrentTimeStamp("createdAt")
        
        
        return 'content added.';
    }

    edit(newContent) {
        this.#content = newContent;
        this.setCurrentTimeStamp("editedAt");
        return 'content edited.';
    }

    get timeStamp() {
        return this.metaData;
    }
}

Object.assign(Post.prototype, timeStampMixin);
const post = new Post();
console.log(post.create("TypeScript limitations"));

console.log(post.edit("There is always a cost to pay to get good things"));

console.log(post.timeStamp);





