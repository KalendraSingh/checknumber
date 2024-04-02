let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.random() * 100;
let guessNumber = Math.ceil(randomNumber);


function checkGuess() {
    let userNum = parseInt(userInput.value);
    if (userNum > guessNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (userNum < guessNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (userNum === guessNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";

    } else {
        gameResult.textContent = "Please inter valid input.";
        gameResult.style.backgroundColor = "red";
    }




}