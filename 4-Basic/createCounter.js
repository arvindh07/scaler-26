function createCounter(start) {
    let counter = start;

    return {
        increment() {
            counter++;
            return counter;
        },
        decrement() {
            counter--;
            return counter;
        },
        reset() {
            counter = start;
            return counter;
        }
    }
}

const counter = createCounter(3);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
