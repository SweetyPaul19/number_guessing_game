// const max=prompt("enter the max number inbetween you can guess:");

// let random = Math.floor(Math.random()*max )+1;

// let guess=prompt("guess the number:");

// while(true){
//     if(guess=='quit'){
//         console.log("you quit.");
//         break;
//     }
//     if(guess==random){
//         console.log("congrats! right guessing");
//         break;
//     }
//     else if(guess>random){
//         guess=prompt("Wrong guessing ,hints: you guess larger number, please re enter:");
    
//     }
//     else if(guess<random){
//         guess=prompt("Wrong guessing ,hints: you guess smaller number, please re enter:");
    
//     }
//     else{
//         console.log("invalid");
//     }
//     if(max!=Int)
//     {
//         console.log("invalid");
//     }

// }

let randomNumber;
let attempts = 0;

function startGame() {
    const max = parseInt(document.getElementById("max").value);
    const message = document.getElementById("message");

    if (isNaN(max) || max <= 0) {
        message.textContent = "❌ Please enter a valid max number";
        return;
    }

    randomNumber = Math.floor(Math.random() * max) + 1;
    attempts = 0;

    message.textContent = "Game started! Guess the number 🎲";

    document.getElementById("guess").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("guess").value = "";
}

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);
    const message = document.getElementById("message");

    if (isNaN(guess)) {
        message.textContent = "❌ Invalid guess";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `🎉 Congrats! Right guessing in ${attempts} attempts`;
        guessInput.disabled = true;
        document.getElementById("guessBtn").disabled = true;
    } 
    else if (guess > randomNumber) {
        message.textContent = `⬆️ Too high! Attempt ${attempts}`;
    } 
    else {
        message.textContent = `⬇️ Too low! Attempt ${attempts}`;
    }

    // clear input so it feels refreshed
    guessInput.value = "";
}

