var botScore = 0;
var playerScore = 0;

document.getElementById("rock").onclick = playerThrowsRock;
document.getElementById("paper").onclick = playerThrowsPaper;
document.getElementById("scissors").onclick = playerThrowsScissors;

function playerThrowsRock() {
    playGame("rock");
}

function playerThrowsPaper() {
    playGame("paper");
}

function playerThrowsScissors() {
    playGame("scissors");
}

function playGame(playersWeapon) {
    var botsWeapon = getRandomWeapon();

    showWeaponImages(playersWeapon, botsWeapon);
    checkWhoWon(botsWeapon, playersWeapon);
}

function getRandomWeapon() {
    var randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function showWeaponImages(playersWeapon, botsWeapon) {
    var playerImage = document.getElementById("playerImage");
    var botImage = document.getElementById("botImage");

    playerImage.src = "images/" + playersWeapon + ".png";
    playerImage.alt = "You chose " + playersWeapon;

    botImage.src = "images/" + botsWeapon + ".png";
    botImage.alt = "The bot chose " + botsWeapon;
}

function checkWhoWon(botsWeapon, playersWeapon) {
    if (botsWeapon === playersWeapon) {
        displayCompleteMessage(
            "You both chose " + playersWeapon + ". It's a tie!"
        );
    } else if (
        (botsWeapon === "scissors" && playersWeapon === "paper") ||
        (botsWeapon === "paper" && playersWeapon === "rock") ||
        (botsWeapon === "rock" && playersWeapon === "scissors")
    ) {
        increaseBotScore(botsWeapon, playersWeapon);
    } else {
        increasePlayerScore(botsWeapon, playersWeapon);
    }
}

function increaseBotScore(botsWeapon, playersWeapon) {
    botScore += 1;

    document.getElementById("computerScore").innerText = botScore;

    displayCompleteMessage(
        "You chose " + playersWeapon +
        ". The bot chose " + botsWeapon +
        ". The bot won!"
    );
}

function increasePlayerScore(botsWeapon, playersWeapon) {
    playerScore += 1;

    document.getElementById("humanScore").innerText = playerScore;

    displayCompleteMessage(
        "You chose " + playersWeapon +
        ". The bot chose " + botsWeapon +
        ". You won!"
    );
}

function displayCompleteMessage(message) {
    document.getElementById("status").innerText = message;
}