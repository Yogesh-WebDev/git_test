const rockBtn=document.querySelector("#rockBtn");
const paperBtn=document.querySelector("#paperBtn");
const scissorsBtn=document.querySelector("#scissorsBtn");
const output=document.querySelector("#output");

let countPlayer=0;
let countComputer=0;
rockBtn.addEventListener('click',function(){
    playRoundInput1("Rock");
});
paperBtn.addEventListener('click',function(){
    playRoundInput1("Paper");
});
scissorsBtn.addEventListener('click',function(){
    playRoundInput1("Scissors");
});
function playRoundInput1(message){
    //console.log("Hello");
    let player="Rock";
    
    let computer=computerPlay();
    let result=playRound(message,computer);
    console.log(typeof(result));
    if (result === "Computer") {
        countComputer++;  
        //
    }
    if(result === "Player"){
        countPlayer++;
    } 
    if(result === "Tie"){
        countComputer++;
        countPlayer++;
    }
    console.log(`count ${countPlayer}`);
    console.log(`count ${countComputer}`);
    const display=document.createElement('div');
    display.innerHTML=`<h2>Result of this Round: ${result}</h2>`;
    output.appendChild(display);
    console.log(result);
    let winner='';
    if (countPlayer == 5) {
        winner="Player";
    
       
    } else if(countComputer== 5) {
        winner="Computer"
    
        
    }else{
        winner='';
    }
    if (winner) {
        console.log(winner ?? "Not yet decided");
        const displayResult=document.createElement('div');
        displayResult.innerHTML=`<h1>Result of this Game: ${winner}</h1>
        <button id="playAgain"onclick="clearCount()" >Play Again</button>`;
        output.appendChild(displayResult); 
        //clearCount();
    }
    
   

}

function clearCount() {
     countPlayer=0;
     countComputer=0;
     output.innerHTML=`<div></div`;
     
}

function computerPlay() {

    let input = Math.floor(Math.random() * 10);
    //console.log(input);
    switch (input) {
        case 0:
        case 1:
        case 2:
        case 3:
            //console.log('Rocks');
            return 'Rock';
            break;

        case 4:
        case 5:
        case 6:
            //console.log('Paper');
            return 'Paper';
            break;

        case 7:
        case 8:
        case 9:
           // console.log('Scissors');
            return 'Scissors';
            break;
    }
};
function playRound(playerSelection, computerSelection) {
    // your code here!
    const player = playerSelection.toLowerCase();
    console.log(player);
   
    const computer = computerSelection.toLowerCase();
    console.log(computer);
    if (player === computer) {
        return 'Tie';
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            return 'Computer';

        } else {
            return 'Player';
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            return 'Computer';

        } else {
            return 'Player';

        }
    }
}
