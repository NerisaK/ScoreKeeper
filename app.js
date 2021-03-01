//Choose and store score elements
const scoreOne = document.querySelector('#p1Display');
const scoreTwo = document.querySelector('#p2Display');

//Choose and store buttons
const buttonOne = document.querySelector('#p1Button');
const buttonTwo = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

//Store score values as numbers
let scoreOneVal = parseInt(scoreOne.innerText);
let scoreTwoVal = parseInt(scoreTwo.innerText);

function scoreCheck() {
    if (scoreOneVal == 5 || scoreTwoVal == 5) {
        gameWon();
    }
}

function gameWon(){
    console.log("won");
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
        
    function colorize (winner, looser) {
        looser.style.color = 'red';
        winner.style.color = 'green';
    }
        
    if (scoreOneVal > scoreTwoVal) {
        let winner = scoreOne; let looser = scoreTwo;
        colorize(winner, looser);
    }
    else {
        let winner = scoreTwo; let looser = scoreOne; colorize(winner, looser);
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

//Reset score to zero
resetButton.addEventListener('click', () => {
    scoreOneVal = 0;
    scoreTwoVal = 0;
    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    scoreOne.style.color = '#4a4a4a';
    scoreTwo.style.color = '#4a4a4a';
})
