// sort() --> Sorts according to Lexographic order, only beneficial in alphabetical sorting.
// If we want to sort numbers then we write a arrow function
let a = ["Apple","Coconut","Buble"];
a.sort();
console.log(a);
// Ascending Sorting
let b = [1,2,5,42,66,21,2];
b.sort((a,b)=>a-b);
console.log(b);
// Decending Sorting
let c = [1,2,5,42,66,21,2];
c.sort((a,b)=>(b-a));
console.log(c);
// We can also sort in objects
let obj = [{name: "prince", gpa: 10}, {name: "Hello",gpa:11}];
// obj.sort((a,b)=>(a.gpa-b.gpa));
obj.sort((x,y)=>x.name.localeCompare(y.name)); // For Strings
console.log(obj);