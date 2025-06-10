const MY_NAME = "AryanTapre";

let toExec = `console.log(MY_NAME)`;
eval(toExec);


const emoji = '👍'; 

let codePoint = emoji.codePointAt(0).toString(16);
console.log("code point:", codePoint);

console.log(String.fromCodePoint('0x'+codePoint));