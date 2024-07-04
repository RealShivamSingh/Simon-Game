//Making two array 

let gameSeq=[];
//User sequence
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector('h2')

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    gameFlash(randbtn);

}
function btnPress(){
    let btn=this;
    userflash(btn);
} 

let allBtnns=document.querySelectorAll(".btn");
for(btns of allBtnns){
    btns.addEventListener("click",btnPress);  
}