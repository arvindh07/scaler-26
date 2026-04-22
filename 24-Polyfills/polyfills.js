const arr = [1, 2, 3, 4, 5];
const multiplier = {
    val: 6
}

const newRes = arr.map(function (num) {
    return num * this.val
}, multiplier);
console.log(newRes);

// polyfill for map
Array.prototype.myMap = function (cb, thisArg) {
    try {
        if (typeof cb !== "function") {
            throw new Error(cb, " is not a function");
        }

        if (!thisArg) {
            thisArg = {};
        }

        let output = [];
        for (let index = 0; index < this.length; index++) {
            const element = this[index];
            const res = cb.call(thisArg, element, index, this);
            output.push(res);
        }
        return output;
    } catch (error) {
        console.log("Error in my map ", error.message);
    }
}

const finalMap = arr.myMap(function (num) {
    return num * this.val
}, multiplier);
console.log(finalMap);
