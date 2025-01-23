// script.js
let randomNumber;
let attempts;
let lastGuess;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    lastGuess = null;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("message").textContent = "У вас є 5 спроб";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "inline-block";
    document.getElementById("restartButton").style.display = "inline-block";
    document.getElementById("guessInput").value = "";
}

document.getElementById("startButton").onclick = startGame;

document.getElementById("endButton").onclick = function() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("endButton").style.display = "none";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("guessInput").value = "";
};

document.getElementById("restartButton").onclick = startGame;

document.getElementById("guessButton").onclick = function() {
    let userGuess = document.getElementById("guessInput").value;

    if (userGuess === "") {
        document.getElementById("message").textContent = "Будь ласка, введіть число.";
        return;
    }

    userGuess = parseInt(userGuess);

    if (userGuess !== lastGuess) {
        attempts--;
        lastGuess = userGuess;
    }

    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = "Вітаю! Ви відгадали число.";
    } else if (attempts > 0) {
        if (userGuess > randomNumber) {
            document.getElementById("message").textContent = "Занадто багато! Спробуйте ще раз. Залишилось спроб: " + attempts;
        } else {
            document.getElementById("message").textContent = "Занадто мало! Спробуйте ще раз. Залишилось спроб: " + attempts;
        }
    } else {
        document.getElementById("message").textContent = "Вибачте, ви використали всі спроби. Загадане число було " + randomNumber;
    }

    document.getElementById("guessInput").value = "";
};