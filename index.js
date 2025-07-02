const startGame = document.getElementById('startGame');
const inputVal = document.getElementById('guess');
const cancel = document.getElementById('cancel');
const textAlert = document.getElementById('textAlert');


let secretNumber;
let attempts = 0;
const maxAttempts = 5;
let gameActive = false;

function guessNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Secret Number (for testing):", secretNumber);
    attempts = 0; 
    gameActive = true;
    inputVal.value = ''; 
    inputVal.focus(); 
}

// Event listeners 
startGame.addEventListener('click', function() {
    guessNumber();
    console.log("Game started!");
});
function aanything(txtAlert, time){
    function clearAlertMessage() {
        txtAlert.innerText = "";
    }
    let intervalId = setInterval(clearAlertMessage, time);

    setTimeout(function() {
        clearInterval(intervalId);
        console.log("Interval cleared!");
    }, time);
}

cancel.addEventListener('click', function() {
    if (gameActive) {
        textAlert.innerText="Game cancelled after " + attempts + " tries.";
        endGame();
        aanything(textAlert, 5000)
       
    } else {
        textAlert.innerText="No game in progress to cancel.";
        aanything(textAlert, 5000)
    }
}); 

function makeGuess() {
    if (!gameActive) {
        textAlert.innerText="Please start the game first!";
        aanything(textAlert, 5000)
        return;
    }

    let guess = Number(inputVal.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        textAlert.innerText="Please enter a number between 1 and 100.";
        aanything(textAlert, 5000)
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        textAlert.innerText="Too low! Try Again.";
        aanything(textAlert, 5000)
    } else if (guess > secretNumber) {
        textAlert.innerText="Too high! Try Again."; 
        aanything(textAlert, 5000)
    } else {
        textAlert.innerText="Correct! You got it in " + attempts + " tries";
        endGame();
        aanything(textAlert, 5000)
        return;
    }

    if (attempts >= maxAttempts) {
        textAlert.innerText="Game over! You've used all your attempts. The secret number was " + secretNumber + ".";
        endGame();
        aanything(textAlert, 5000)     
        return;
    }

    inputVal.value = '';
    inputVal.focus();
}

function endGame() {
    gameActive = false;
    secretNumber = null;
    attempts = 0;
    inputVal.value = ''; 
    cancel.disabled = true; 
}

inputVal.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        makeGuess();
    }
});
