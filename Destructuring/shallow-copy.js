// Shallow copy(only in nested arrays or objects) - if we change the copy, it also modifies original object 
let obj = {
    name : "Prince",
    rollno: {new:2510993260}
}
// Method 1
let shallowcpy = Object.assign({},obj);
// Method 2
let shallowcpy_1 = {...obj};
obj.rollno.new = 2510993261;
console.log(obj);
console.log(shallowcpy);
console.log(shallowcpy_1);