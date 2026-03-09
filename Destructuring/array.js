// Destructuring array
let arr = ["hello","guys","this","is","prince","dhillon"];
const[x1,x2,x3] = arr;
console.log(x2); // prints guys
const[a,b,c,...d] = arr;
console.log(d);