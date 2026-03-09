let s = "Hello World!";
let vowels = "aeiouAEIOU";
let count = 0;
for(ch of s){
    for (let i = 0; i < vowels.length; i++) {
        const element = vowels[i];
        if(element == ch){
            count+=1;
        }
        
    }
}
console.log(count);


// let s = "Hello World!";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let ch of s) {
//     if (vowels.includes(ch)) {
//         count++;
//     }
// }
// console.log(count);