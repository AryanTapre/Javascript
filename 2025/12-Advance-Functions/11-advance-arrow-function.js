// NOTE: https://javascript.info/arrow-functions

// TODO: 1
// let group = {
//     title: "my custom group",
//     students: ["elon","kimble","maye","aryan"],

//     showList() {
//         this.students.forEach( function(stu) {           
//             console.log(`${this.title}, ${stu}`);        // NOTE: WE CAN'T ACCESS TITLE HERE this is bind to global Object
//         } )
//     }
// };

// group.showList();

// solution for  TODO: 1

let group = {
    title: "my custom group",
    students: ["elon","kimble","maye","aryan"],

    showList() {
        this.students.forEach( (stu) => {           
            console.log(`${this.title}, ${stu}`);        // NOTE: WE  ACCESS TITLE HERE this is bind to current object beacuse of arrao function
        } )
    }
};

group.showList();


// TODO: create a function sayHi() with an delay of 1 second...

let user = {
    name: "aryan",
    sayHi() {
        console.log(`HI, ${this.name}`);
    }
}

function defer(func, delayWith) {
    return function(...args) {
        // let ctx = this;
        // console.log(this);

        // setTimeout( function() {
        //     func.call(ctx);
        // }, delayWith )        

        setTimeout(() => {    //NOTE: ARROW FUNCTION IS MORE CLEANER
            func.apply(this, ...arguments);
        }, delayWith);
    }      
}

const oneSec = defer(user.sayHi, 1000);
oneSec.call(user);
