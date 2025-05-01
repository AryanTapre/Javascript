
/** IMPORTANT:
 *  If declare variables using 'var' it implictily becomes property of Global Object...
 */
var aryan = function() {
    console.log("Hello Aryan");
    
};

console.log(globalThis);


aryan();
