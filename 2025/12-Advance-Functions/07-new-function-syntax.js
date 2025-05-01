// https://javascript.info/new-function

/** IMPORTANT:
 *  Functions created with new Function, have [[Environment]] referencing the global Lexical Environment, not the outer one. Hence, they cannot use outer variables. But that’s actually good, because it insures us from errors. Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.
 * 
 */

// NOTE: unable to get name from closure function

// function callme() {
//     let name = "aryan";
//     inner = new function() {
//         return name;
//     }
//     return inner;
// }

function callme() {
    let name = "aryan";
    inner =  function() {
        return name;
    }
    return inner;
}

const x = callme();
console.log( x() );
