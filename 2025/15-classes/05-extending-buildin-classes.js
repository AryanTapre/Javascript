// NOTE: https://javascript.info/extend-natives

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;   
    }
};

const arr = new PowerArray();
arr.push("aryan");
arr.unshift("tapre");

console.log(arr.isEmpty());

console.log(arr.constructor == PowerArray);



class Custom extends Object {

};



