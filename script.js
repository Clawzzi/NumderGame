// script.js
let randomNumber;
let attempts;
let lastGuess;
let timer;
let timeLeft;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    lastGuess = null;
    timeLeft = 60;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("message").textContent = "У вас є 10 спроб";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "inline-block";
    document.getElementById("restartButton").style.display = "inline-block";
    document.getElementById("guessInput").value = "";
    document.getElementById("timeLeft").textContent = timeLeft;
    document.getElementById("guessHistory").textContent = "";
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timeLeft").textContent = timeLeft;
    } else {
        clearInterval(timer);
        document.getElementById("message").textContent = "Час вийшов! Загадане число було " + randomNumber;
        document.getElementById("guessInput").disabled = true;
        document.getElementById("guessButton").disabled = true;
    }
}

document.getElementById("startButton").onclick = startGame;

document.getElementById("endButton").onclick = function() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("endButton").style.display = "none";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("guessInput").value = "";
    clearInterval(timer);
};

document.getElementById("restartButton").onclick = startGame;

document.getElementById("guessButton").onclick = function() {
    processGuess();
};

document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        processGuess();
    }
});

function processGuess() {
    let userGuess = document.getElementById("guessInput").value;

    if (userGuess === "") {
        document.getElementById("message").textContent = "Будь ласка, введіть число.";
        return;
    }

    userGuess = parseInt(userGuess);

    if (userGuess !== lastGuess) {
        attempts--;
        lastGuess = userGuess;
        document.getElementById("guessHistory").textContent += userGuess + " ";
    }

    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = "Вітаю! Ви відгадали число.";
        clearInterval(timer);
    } else if (attempts > 0) {
        if (userGuess > randomNumber) {
            document.getElementById("message").textContent = "Занадто багато! Спробуйте ще раз. Залишилось спроб: " + attempts;
        } else {
            document.getElementById("message").textContent = "Занадто мало! Спробуйте ще раз. Залишилось спроб: " + attempts;
        }
    } else {
        document.getElementById("message").textContent = "Вибачте, ви використали всі спроби. Загадане число було " + randomNumber;
        clearInterval(timer);
    }

    document.getElementById("guessInput").value = "";
}