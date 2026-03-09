// Second largest Number
let arr = [4, 9, 2, 7, 5];
// Output: 7
let max = -Infinity;
let smax = -Infinity;
for (const ch of arr) {
    if (ch > max){
        max = ch;
    }
}
let New = arr.filter(ch=>ch!=max);
for (const hc of New) {
    if (hc>smax){
        smax = hc;
    }
}
console.log("The Second Largest Number is: "+smax);