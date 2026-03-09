// Anagram
// "listen", "silent"
// Output: true
let s1 = "listen";
let s2 = "silent";
let flag = 1;
for (const ch of s1) {
    if (!s2.includes(ch)) {
        flag = 0;
        break;
    }
}
if (flag) {
    console.log("true");
}
else{
    console.log("false");
}