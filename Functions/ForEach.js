// A callback is a function passed as an argument to another function.
// Foreach is also called as Higher order Function/Method.
// For each is used to pass every element of an array to the function.
let arr = [1,2,3,4,5];
arr.forEach(function printElements(ch){
    console.log(ch);
});
// We do not need to call this funtion

// We can also use Arrow functions to declare it
arr.forEach((ch)=>{
    console.log(ch);
});

// In the call back(parameter section), we have 3 values by default
// 1. iterater, index, the array itself

arr.forEach((ch,i,arr)=>{
    console.log(ch,i,arr);
});