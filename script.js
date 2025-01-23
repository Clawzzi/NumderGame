// script.js
let randomNumber;
let attempts;

document.getElementById("startButton").onclick = function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("message").textContent = "Я загадав число від 1 до 100. Спробуй відгадати!";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "inline-block";
};

document.getElementById("endButton").onclick = function() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("endButton").style.display = "none";
};

document.getElementById("guessButton").onclick = function() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    attempts--;

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
};