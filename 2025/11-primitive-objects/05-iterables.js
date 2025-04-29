//NOTE: Making range object iterable to use for..of loop

let range = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.from <= this.to) {
            return { done: false, value: this.from++ };
        } else {
            return { done: true };
        }
    }
};


// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };


for (let prop of range) {
    console.log(prop);    
}

// FIXME: REAL WORLD EXAMPLE-
// suppose we are buliding a tool that analyzes log from a string

const log = `2024-04-01: Server started
2024-04-01: User logged in
2024-04-02: Server stopped`;

class LogLines {
    constructor(logs) {
        this.lines = logs.split("\n");
    }
    [Symbol.iterator]() {
        let index = 0;
        const lines = this.lines;

        return {
            next() {
                if (index < lines.length) {
                    return {
                        done: false,
                        value: lines[index++]
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
}

const logc = new LogLines(log);
for (line of logc) {
    console.log(`Analyzing.. : ${line}`);
}

// implementing a clean log lines, skip if there is no line

const rawLog = `
2025-01-01: App started

2025-01-01: Error: Failed to connect

`;

class CleanLogLines {
    constructor(rawlogs) {
        this.rawLogs = rawlogs;
    }
    
    [Symbol.iterator]() {
        let index = -1;
        const lines = this.rawLogs.split('\n');

        return {
            next() {
                index++;
                while (index < lines.length) {
                    if (lines[index]?.length != 0) {

                        return { done: false, value: lines[indexls] };                        
                    }
                } 
                return { done: true };
                
            }

            // next() {
            //     while (index < lines.length) {
            //         const line = lines[index++].trim();
            //         if (line) return { value: line, done: false }; // skip empty lines
            //     }
            //     return { done: true };
            // }
        };
    }
};

const cleanLogLines = new CleanLogLines(rawLog);

for (const line of cleanLogLines) {
    console.log(line);
}

