// flatten nested array
const nums = [1, [2, 3], [4], 5, [6, 7, [8, 9]]];


const flattenArr = (nums) => {
    let out = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        // console.log(element, typeof element);
        if(Array.isArray(element)) {
            out.push(...flattenArr(element));
        } else {
            out.push(element);
        }
    }
    return out;
}

console.log(flattenArr(nums), " flatten");