// NOTE: https://javascript.info/coding-style
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }    
    
    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
    alert(`Power ${n} is not supported, please enter a non-negative integer number`);
} else {
    alert( pow(x, n) );
}


if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiaSign === 'Libra'
) {
    letTheSorceryBegin();
}

show(parameters,
     aligned,
     one,
     after, 
     another 
)