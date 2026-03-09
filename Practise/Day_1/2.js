// Remove Duplicates
let arr = [1,2,2,3,4,4];
let result = [];
// Output: [1,2,3,4]
for (const ch of arr) {
    if (!result.includes(ch)) {
        result.push(ch)
    }
}
console.log(result);