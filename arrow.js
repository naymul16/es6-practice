// function doubleit(num){
//     return num*2;

// }
// const doubleit = function myfunc(num){
//     return num*2;
// }
const doubleit = num => num*2;
const add = (num1,num2) => num1 + num2 ;
const giveme = () => 5;
const doMath = (num1,num2) => {
    const sum = num1 + num2;
    const diff = num1-num2;
    const result =sum*diff;
    return result
}
const result = doMath(3,56);
console.log(result);