// Map and For each are similar but map creates new list while foreach doesn't.
let arr = [1,2,3,4,5];

// Map
let result = arr.map((ch)=>{
    return ch= ch**2;
});
console.log(result);

// Filter
let x = arr.filter((ch)=>{
    return ch%2==0;
});
console.log(x);

// Reduce
let y = arr.reduce((a,b)=>{
    return a+b;
});
console.log(y);