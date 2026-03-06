let box = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let turnX = true; //PlayerX, Player0
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; 
box.forEach(element => {
    element.addEventListener("click",()=>{
        if (turnX) {
            element.innerText = "X";
            turnX = false;
        }
        else{
            element.innerText = "O";
            turnX = true;
        }
        element.disabled = true;
        count+=1;
        let isWin = winner();
        if (count===9 && !isWin) {
            alert("Game Draw");
        }
    })
});
const disableAllBoxes = () => {
    box.forEach(element => {
        element.disabled = true;
    });
};
const show_winner = (x)=>{
    alert(`${x} is the Winner`);
}
let winner = ()=>{
    for (const ch of winPatterns) {
        if (box[ch[0]].innerText!="" && box[ch[1]].innerText!="" && box[ch[2]].innerText!="") {
            if (box[ch[0]].innerText === box[ch[1]].innerText && box[ch[1]].innerText === box[ch[2]].innerText) {
                show_winner(box[ch[0]].innerText);
                return true;
            }
            
        }
    }

}
reset.addEventListener("click", () => {
    turnX = true;
    count = 0;
    box.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
});