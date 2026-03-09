// Frequency counter
let s = "aabccc";
let result = {};
// Output: {a:2, b:1, c:3}
function count(x,s) {
    let count = 0
    for (const ch of s) {
        if (x == ch) {
           count+=1; 
        }
    }
    return count;
}
for (const ch of s) {
    result[ch] = count(ch,s);
}
console.log(result);