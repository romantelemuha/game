//Naivery sripts

let playerPaper=document.querySelector(".playerPaper");
let playerRock=document.querySelector(".playerRock");
let playerScisours=document.querySelector(".playerScisours");
let playerScoreText=document.querySelector(".playerScore");
let computerScoreText=document.querySelector(".computerScore");
let draw=document.querySelector(".draw");
let reultText=document.querySelector("h1");

let options=["paper", "rock", "scisours"];

let playerChoose;
let aiChoose;
let playerScore=0;
let aiScore=0;
let gameResult;

playerPaper.addEventListener('click', function(){
    playerChoose="paper";
    startGame();
    endGame();
    displayResult();
})
playerRock.addEventListener('click', function(){
    playerChoose="rock";
    startGame();
    endGame();
    displayResult();
})
playerScisours.addEventListener('click', function(){
    playerChoose="scisours";
    startGame();
    endGame();
    displayResult();
})

function startGame(){
    aiChoose=options[getRandom()];
    if(playerChoose==="paper" && aiChoose==="rock" ||
        playerChoose==="rock" && aiChoose==="scisours" ||
        playerChoose==="scisours" && aiChoose==="paper"
    ){
        playerScore++;
    }else if(playerChoose===aiChoose){
        isdraw();
    }else{
        aiScore++;
    }
}

function getRandom(){
    return Math.floor(Math.random()*3);
}

function displayResult(){
    playerScoreText.textContent=playerScore;
    computerScoreText.textContent=aiScore;
    reultText.textContent=gameResult;
}

function endGame(){
    if(playerScore===3){
        gameResult="Player won!!!";
        reset();
    }else if(aiScore===3){
        gameResult="Ai won!!!";
        reset();
    }
}

function reset(){
    playerScore=0;
    aiScore=0;
    playerScoreText.textContent=playerScore;
    computerScoreText.textContent=aiScore;
    draw.textContent="";
}

function isdraw(){
    draw.textContent="Opppss, there was a draw....";
}