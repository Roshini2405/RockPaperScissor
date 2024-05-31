let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userscore=document.querySelector("#yourscoreval");
const compscore=document.querySelector("#compscoreval");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        let choiceid=choice.getAttribute("id");
        playgame(choiceid);
    });
});
let compchoicegen=()=>{
    const options=["rock","paper","scissor"];
    const compind=Math.floor(Math.random()*3);
    return options[compind];
}
let showWinner=(userWin,userchoice,compchoice)=>{
    if (userWin){
        userScore++;
        userscore.innerText= userScore;
        msg.innerText=`you win  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscore.innerText= compScore;
        msg.innerText=`You lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
let playgame=(userchoice)=>{
   const compchoice=compchoicegen();
if (userchoice == compchoice){
    drawgame();
}
else{
    userWin = true;
    console.log(userchoice);
    console.log(compchoice);

    if (userchoice=="rock"){
        userWin=compchoice=="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userWin=compchoice=="scissor"?false:true;
    }
    else{
        userWin=compchoice=="rock"?false:true; 
    }
    showWinner(userWin,userchoice,compchoice);
}
}
let drawgame=()=>{
msg.innerText="Match is DRAW";
msg.style.backgroundColor="rgb(16, 63, 64)";
}
