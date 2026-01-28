let marks = [85,97,44,37,76,60];
let sum = 0;
for(let ch of marks){
    sum+=ch;
}
let avg = sum/(marks.length)
console.log(`Average of the given marks is ${avg}`);