const arr = [1,2,3,4,5];

const sqArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sqArr.push(element * element);
}

// map - hoc
const sq2 = arr.map((el) => el * el);

// console.log("sq 1 ", sqArr);
// console.log("sq 2 ", sq2);

// filter - hoc
const nums = [1,2,3,4,5,6];
const even = nums.filter((num) => num % 2 === 0);
const odd = nums.filter((num) => num % 2 !== 0);
// console.log(even, odd);

// prefix sum
const arr2 = [1,2,3,4,5];

function prefixSum(arr) {
    let res = [];
    res[0] = arr[0];

    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        res[index] = element + res[index-1];
    }

    return res;
}
// console.log("res ", prefixSum(arr2));

function sum(arr) {
    let res = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        res += element;
    }

    return res;
}
// console.log("sum ", sum(arr2));

// reduce
// n inputs into 1 output
const total = arr2.reduce(function(acc, curr, idx, arr){
    acc += curr;
    return acc;
}, 0);
// console.log("toal ", total);

const prArr = arr2.reduce(function(acc, curr, idx, arr){
    if(idx === 0){
        acc.push(curr);
    } else {
        acc.push(curr + acc[idx-1]);
    }
    return acc;
}, []);
console.log("toal ", prArr);