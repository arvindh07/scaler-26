const arr = [1,2,3,4,5];

const sqArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sqArr.push(element * element);
}

// map - hoc
const sq2 = arr.map((el) => el * el);

console.log("sq 1 ", sqArr);
console.log("sq 2 ", sq2);