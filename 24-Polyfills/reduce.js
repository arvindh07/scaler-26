const arr = [1, 2, 3, 4, 7];

const sum = arr.reduce((acc, curr, idx) => {
    if(idx === 0) {
        acc.push(curr);
    } else {
        acc.push(acc[idx-1] + curr);
    }
    return acc;
}, []);

console.log(sum, "sum");

Array.prototype.myReduce = function (cb, initialValue, thisArg) {
    try {
        if(typeof cb !== "function") {
            throw new Error(cb + " is not a function");
        }
        if(!thisArg) {
            thisArg = {};
        }
        let total = initialValue;

        for (let index = 0; index < this.length; index++) {
            const element = this[index];
            const result = cb(total, element, index, this);
            total = result;
        }

        return total;
    } catch (error) {
        console.log("Error in reduce ", error.message);
    }
}

const sum2 = arr.myReduce((acc, curr, idx) => {
    if(idx === 0) {
        acc.push(curr);
    } else {
        acc.push(acc[idx-1] + curr);
    }
    return acc;
}, []);

console.log(sum2, "sum 2");