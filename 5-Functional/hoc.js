const radiusArr = [2, 3, 4, 5, 6, 7, 8];
// area, circumference, diameter

// 🚀 Approach 1
// const calcArea = () => {
//     let res = [];
//     for (let index = 0; index < radiusArr.length; index++) {
//         const element = radiusArr[index];
//         res.push(3.14 * element * element);
//     }
//     return res;
// }
// const calcDiameter = () => {
//     let res = [];
//     for (let index = 0; index < radiusArr.length; index++) {
//         const element = radiusArr[index];
//         res.push(2 * element);
//     }
//     return res;
// }
// const calcCircum = () => {
//     let res = [];
//     for (let index = 0; index < radiusArr.length; index++) {
//         const element = radiusArr[index];
//         res.push(2 * 3.14 * element);
//     }
//     return res;
// }

// console.log("Area ", calcArea());
// console.log("Dia ", calcDiameter());
// console.log("Circum ", calcCircum());

// 🚀 Approach 2 - Using HOC and callbacks
// calc - HOC, logic - callbacks
const calc = (radiusArr, logic) => {
    let res = [];
    for (let index = 0; index < radiusArr.length; index++) {
        const element = radiusArr[index];
        res.push(logic(element));
    }
    return res;
}
const calcArea = (element) => {
    return 3.14 * element * element;
}
const calcDiameter = (element) => {
    return 2 * element;
}
const calcCircum = (element) => {
    return 2 * 3.14 * element;
}
console.log("Area ", calc(radiusArr, calcArea));
console.log("Dia ", calc(radiusArr, calcDiameter));
console.log("Circum ", calc(radiusArr, calcCircum));