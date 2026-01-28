let n = Math.floor((Math.random()*100)+1);
let count = 0;
let my_num;
console.log("Select any number between 1 to 100");
do{
    my_num = Number(prompt("Enter your number: "));
    if (my_num>n){
        console.log("Little Lower Please");
        count++;
    }
    else if(n>my_num){
        console.log("Little Higher Please");
        count++;
    }
    else{
        count ++;
        console.log("Correct Guess !");
    }
}
    while(my_num!=n);
console.log("Congratulations You have Guessed the number in ",count,"tries");