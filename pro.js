let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["yellow","red","green","purple"];

document.addEventListener("keypress",function(){
    if(started===false){
    console.log("Game Started");
    started=true;
    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randBtn);
    btnFlash(randBtn);
};

function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }

        console.log("same value ");
    }
    else{
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b> <br> Press any Key to start!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },150);
        reset();
    }
}



function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}