// Deep copy
let obj = {
    name : "Prince",
    rollno: {new:2510993260}
}
let deepcpy = JSON.parse(JSON.stringify(obj));
obj.rollno.new = 2510993261;
console.log(deepcpy);