// 1. push() : append also we can append multiple items
// 2. pop() : delete from end and return
// 3. toString(): converts array to string --> returns new string
// 4. concat() --> returns new array, i can also add multiple arrays
// 5. unshift() : same as push but at start
// 6. shift() : same as pop but at start
// 7. slice() : returns new array
// 8. splice() : changes existing array
// if i only pass one argument in splice eg. splice(4) then it deletes all elements from index 3rd.
// splice(starting index, delete count, new elements) : we can use it to add,delete or replace elements
let hello = [1,2,3,4,5];
hello.push("Hello");
hello.pop(); // no index deletion
c = hello.toString()
hello.splice(1,2,'hello','hi');
console.log(hello);
console.log(c);
console.log(hello.slice(3))