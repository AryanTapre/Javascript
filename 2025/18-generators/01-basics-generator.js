// NOTE: https://javascript.info/generators


function* generateSeq() {
    yield 1;
    yield 2;
}

const seq = generateSeq();
console.log(seq.next()); // *need to comment them to get iterable results
console.log(seq.next()); //

for (const x of seq) {
    console.log(x);
}

// seq.return();
// seq.throw(new SyntaxError("Hola wanted todo something"))


// TODO: taken from iterables chapters...

console.log("range ===>");

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {
                        done: false,
                        value: this.current++
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        };
    }
};

for (x of range) {
    console.log(x);    
}



// TODO: Generator  Composition...


function* generatesequences(start, end) {
    console.log("one");
    
    for (let i = start; i <= end; i++) {
        yield i;
    }
};

function* generatePasswordCodes() {
    console.log("Two");
    
    yield* generatesequences(48, 57);  // 0..9
    yield* generatesequences(65, 90); // A..Z
    yield* generatesequences(97, 122);  // a..z
}

let str = '';
for (let code of generatePasswordCodes()) {
    console.log("three");
    
    str += String.fromCharCode(code);
}

console.log("passcode : " + str);



//================================= REAL WORLD STUFF============================

// lazy evaluation
function* generateInfiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const numbers = generateInfiniteNumbers();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.return("null")); // { value: null, done: true }


// Custom iterables..
const myIterables = {
    *[Symbol.iterator]() {
        yield "a";
        yield "b";
    }
}

const iterator = myIterables[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// TODO: A paginated dta fetching (lazy data consumption)
// logs an error per page based on PAGE_SIZE


const allLogs = [
  "Error at line 1", "Warning at line 2", "Info at line 3",
  "Debug at line 4", "Error at line 5", "Info at line 6",
  "Error at line 7", "Warning at line 8", "Info at line 9"
];

function* logPaginator(logs, pageSize = 1) {
    let index = 0;
    
    while (index < logs.length) {
        yield logs.slice(index, index + pageSize);
        index += pageSize;
    }
} 

const paginator = logPaginator(allLogs, 3);
console.log(paginator.next().value);
console.log(paginator.next().value);
console.log(paginator.next().value);
console.log(paginator.next());


