// Like python we can store any datatype but heterogenous elements are not generally preffered.(Mutable in nature)
let marks = [1,2,3,4,5];  //Syntax
const hello = [1,2,3,4,5];
console.log(marks);

console.log(marks.length); //Length of array

console.log(typeof(marks)); // Note : type of array is object --> here keys are indices
console.log(marks[0]);
console.log(marks[9]); // undefined instead of index out of range