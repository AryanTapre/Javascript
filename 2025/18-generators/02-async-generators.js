//NOTE: https://javascript.info/async-iterators-generators

let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator](){
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true }
                }
            }
        }; 
    }
};



(async () => {
    for await (let value of range) {
        console.log(value);
    }
})()


// ASYNC sequence ganerator...

async function* sequenceGenerator(start, end) {
    for (let i = start; i<= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

async function values() {
    const sequence = sequenceGenerator(10, 20);
    for await (let val of sequence) {
        console.log(val);
    }
}
values();


