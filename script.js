let buttons= document.querySelectorAll(".btn");
let resetbuttons = document.querySelector("#res");
let turnO = true;
let winnerbtn = document.querySelector(".winner-btn");
let start = document.querySelector("#start-btn");
let winners = document.querySelector(".winners");

const winpatterns = [
    [0,1,2], [0,3,6] , [0,4,8] , [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];
// console.log(winpatterns)
const enableboxes = () =>{
    for(let e of buttons){
        e.disabled = false;
        e.innerText = ""
        winners.classList.add("hide");
    }
};

const resetgame = () =>{
    turnO = true;
    enableboxes();
}

buttons.forEach((e)=>{
    e.addEventListener("click" , ()=>{
        console.log("clicked");

        if(turnO){
            e.innerText = "O";
            turnO = false;
        }else{
            e.innerText = "X";
            turnO = true;
        }
        e.disabled = true;
        checkwinner();
    });
});
const disableboxes = () =>{
    for(let e of buttons){
        e.disabled = true;
    }
};


const showwinner = (winner) =>{
    winnerbtn.innerText = `congratulations , winner is ${winner}`;
    winners.classList.remove("hide");
    disableboxes();

}

const checkwinner = () =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(buttons[pattern[0]] , buttons[pattern[1]], buttons[pattern[2]]);
        // console.log(buttons[pattern[0]].innerText , buttons[pattern[1]].innerText, buttons[pattern[2]].innerText);
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos2val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);

            }
        }

    };
};

start.addEventListener("click", resetgame);
resetbuttons.addEventListener("click", resetgame);


