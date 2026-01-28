for(let i=1; i<=5; i++){
    console.log("Hello World !");
}
// Further of Two Types: For-in and For-of

// For of is used to iterate over string or array elements
let x = "Hello";
for(ch of x){
    console.log(ch);
}

// For in is used to iterate over keys of objects and arrays.
let y = {Name: "Prince", Age: 20};
for(ch in y){
    console.log(ch);
}