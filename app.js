//Choose score elements
const scoreOne = document.querySelector('#p1Display');
const scoreTwo = document.querySelector('#p2Display');

//Choose buttons
const buttonOne = document.querySelector('#p1Button');
const buttonTwo = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

//Store score values as numbers
let scoreOneVal = parseInt(scoreOne.innerText);
let scoreTwoVal = parseInt(scoreTwo.innerText);


const playto = document.querySelector('#playto'); //The dropdown menu
const par = document.querySelector('#hint'); //The text under scores

//The game is won when one of the players hits the max score chosen by the user
function scoreCheck() {
    let currentNum = parseInt(playto.selectedOptions[0].label);
    if (scoreOneVal == currentNum || scoreTwoVal == currentNum){        
        gameWon()
        }
    }

//Disable buttons, change score color and write who is the winner
function gameWon(){    
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
        
    function colorize (winner, looser) {
        looser.style.color = '#f14668';
        winner.style.color = '#00d1b2';
    }
        
    if (scoreOneVal > scoreTwoVal) {
        let winner = scoreOne; let looser = scoreTwo;
        colorize(winner, looser);
        par.innerHTML = "<b>Game over</b>. The Player One has won.";
    }
    else {
        let winner = scoreTwo; let looser = scoreOne; colorize(winner, looser);
        par.innerHTML = "<b>Game over</b>. The Player Two has won.";
    }      
    
};


//When the button is clicked, change score value and show it
buttonOne.addEventListener('click', () => {
    scoreOneVal++;
    scoreOne.innerText = scoreOneVal;
    scoreCheck();
})

buttonTwo.addEventListener('click', () => {
    scoreTwoVal++;
    scoreTwo.innerText = scoreTwoVal;
    scoreCheck();
})

//Reset score to zero, colors and text to default, make buttons active again
resetButton.addEventListener('click', () => {
    scoreOneVal = 0;
    scoreTwoVal = 0;

    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;

    buttonOne.disabled = false;
    buttonTwo.disabled = false;

    scoreOne.style.color = '#4a4a4a';
    scoreTwo.style.color = '#4a4a4a';

    par.innerText = "Use the buttons below to keep score";
})
