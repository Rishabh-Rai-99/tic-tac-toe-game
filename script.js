let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn");
let msgCont = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

turnO=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if (turnO) {
            box.innerText="O";
            box.classList.add("animation");
            box.style.color = "orange";
            turnO=false;
        }
        else{
            box.innerText="X"
            box.classList.add("animation");
            box.style.color = "#333333";
            turnO=true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const newgame= ()=>{
    newbtn.addEventListener("click",()=>{
        resetgame();
    })
} 

const resetgame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("animation");
        box.disabled = false;
    });
    msgCont.classList.add("hide");
    turnO = true; 
    
}
newgame();

reset.addEventListener("click",()=>{
        resetgame();
    })
const showwinner = (winner)=>{
    msg.innerText=(`Congratulations! Winner Is ${winner}`)
    msgCont.classList.remove("hide")
    newgame();
}
const draw= ()=>{
    msg.innerText=("Game Is Draw")
    msgCont.classList.remove("hide")
    newgame();
}

const checkwinner = ()=>{
    for (const pattern of winPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
    

    if (pos1val != "" && pos2val !="" && pos3val !="") {
        if(pos1val===pos2val && pos2val===pos3val){
            console.log('winner',pos1val);
            showwinner(pos1val);
            return; // Exit function once we have a winner
        }
    }
}

// Check for draw if no winner found
let allFilled = Array.from(boxes).every(box => box.innerText !== "");
if (allFilled) {
    draw();
        }
}