// Assignment operators: = += -= *= %=
// Comparison operators: == >= <= < >
// Logical operators: || && !
let a = 10;
let b = "10";
console.log(a==b); // true
// if i want to strictly compare the we use ===
console.log(a===b); //false
//nullish coalescing assignment (??=) operator
let x = null;
x ??= 10; // only when x is null then 10 will be assigned to x.
console.log(x);