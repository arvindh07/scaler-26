const num = [1, 2, 3, 4, 5];

const odd = num.filter((n) => n % 2 !== 0);
const even = num.filter((n) => n % 2 === 0);
console.log(odd, even);

// polyfill
Array.prototype.myFilter = function (cb, thisArg) {
    try {
        if (typeof cb !== "function") {
            throw new Error(cb, " is not a function");
        }

        let output = [];
        for (let index = 0; index < this.length; index++) {
            const element = this[index];
            const val = cb.call(thisArg, element, index, this);
            if(val) output.push(element);
        }
        return output;
    } catch (error) {
        console.log("Error in filter ", error.message);
    }
}
const odd2 = num.myFilter((n) => n % 2 !== 0);
const even2 = num.myFilter((n) => n % 2 === 0);
console.log(odd2, even2);