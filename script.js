let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let win_msg = document.querySelector(".win_msg");
let msg = document.querySelector("#msg");

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let player1 = true;
let box_count = 0;

box.forEach((box) => {
    box.addEventListener("click", () =>{
        if (player1) {
            box.innerText = "O";
            box.style.color = "brown";
            player1 = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#00a6fb";
            player1 = true;
        }

        box.disabled = true;
        box_count++;

        let isWinner = checkWinner();

        if (box_count === 9 && isWinner != true){
            msg.innerText =`OOPS!! It's a Tie...Reset for new game!!`;
            win_msg.classList.remove("hide");
            box.disabled = true;
        }
    });
});

reset.addEventListener("click", () => {
    box_count = 0;
    enableButtons();
    win_msg.classList.add("hide");
    player1 = true;
});

let enableButtons = () => {
    for (let every of box){
        every.disabled = false;
        every.innerText = "";
    }
};
 
let disableButtons = () => {
    for (let every of box){
        every.disabled = true;
    }
};

let showWinner = (winner) => {
    msg.innerText =`Congratulations!! Winner is ${winner}...Reset for next game!!`;
    win_msg.classList.remove("hide");
    disableButtons();
};

let checkWinner = () => {
    for (pattern of winPatterns) {
        if (box[pattern[0]].innerText != "" && box[pattern[1]].innerText != "" && box[pattern[2]].innerText != "")
        if (box[pattern[0]].innerText === box[pattern[1]].innerText && box[pattern[0]].innerText === box[pattern[2]].innerText){
            showWinner(box[pattern[0]].innerText);
            return true;
        }
    }
    
}

