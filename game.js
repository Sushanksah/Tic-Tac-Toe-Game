let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-Btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-Game");

let turnO = true;
count = 0;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const newGameBtn = () => {
    turnO = true;
    count = 0;
    msgContainer.classList.add("hide");
    enabledBtn();
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("o-Color")
            box.classList.remove("x-Color")
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x-Color")
            box.classList.remove("o-Color")
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            draw();
        }
    })
});

const draw = () =>{
    msgContainer.classList.remove("hide");
    msg.innerText = "Match is Draw.\n Play Again!!!"
}

const enabledBtn = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const disabledBtn = () =>{
    for(box of boxes){
    box.disabled = true;
    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disabledBtn();
}

const checkWinner = () => {
    for (let patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click", newGameBtn);
resetGame.addEventListener("click", newGameBtn);