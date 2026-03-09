let el = document.querySelector("#toggle");
let color = "dark";
el.addEventListener("click",()=>{
    if (color === "dark") {
        color = "light";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        color = "dark";
        document.querySelector("body").style.backgroundColor = "white";
    }
});