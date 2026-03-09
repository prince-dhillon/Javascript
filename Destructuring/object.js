// Destructuring of objects
let obj = {
    name:"Prince",
    rollno: "2510993260"
}
const{name,...other} = obj;
console.log(name);
console.log(other);