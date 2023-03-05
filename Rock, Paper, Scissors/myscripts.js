let userWins = 0, compWins = 0, totalGames = 0;
let compMove = document.getElementById("computerChoice");
let message = document.getElementById("message");
let scoreBoard = document.getElementById("score");
let total = document.getElementById("totalGames");
document.getElementById("reload").style.color = "black";

function choose_Rock() {
    let computer = (Math.floor(Math.random() * 3) + 1);

    if (computer == 1) {
        compMove.innerHTML = "The computer chose <span class='rock'>Rock</span>";
        message.innerHTML = "It's a TIE.";
        totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else if (computer == 2) {
        compMove.innerHTML = "The computer chose <span class='paper'>Paper</span>";
        message.innerHTML = "You LOSE!";
        compWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else if (computer == 3) {
        compMove.innerHTML = "The computer chose <span class='scissors'>Scissors</span>";
        message.innerHTML = "You WIN!";
        userWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }

    document.getElementById("reload").style.color = "white";
}

function choose_Paper() {
    let computer = Math.floor((Math.random() * 3) + 1);

    if (computer == 1) {
        compMove.innerHTML = "The computer chose <span class='paper'>Paper</span>";
        message.innerHTML = "It's a TIE.";
        totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else if (computer == 2) {
        compMove.innerHTML = "The computer chose <span class='scissors'>Scissors</span>";
        message.innerHTML = "You LOSE!";
        compWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else {
        compMove.innerHTML = "The computer chose <span class='rock'>Rock</span>";
        message.innerHTML = "You WIN!";
        userWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    document.getElementById("reload").style.color = "white";
}

function choose_Scissors() {
    let computer = Math.floor((Math.random() * 3) + 1);

    if (computer == 1) {
        compMove.innerHTML = "The computer chose <span class='scissors'>Scissors</span>";
        message.innerHTML = "It's a TIE.";
        totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else if (computer == 2) {
        compMove.innerHTML = "The computer chose <span class='rock'>Rock</span>";
        message.innerHTML = "You LOSE!";
        compWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    else {
        compMove.innerHTML = "The computer chose <span class='paper'>Paper</span>";
        message.innerHTML = "You WIN!";
        userWins++; totalGames++;
        scoreBoard.innerHTML = "YOU: " + userWins + "<br>COMPUTER: " + compWins;
        total.innerHTML = "GAMES: " + totalGames;
    }
    document.getElementById("reload").style.color = "white";
}

function refresh() {
    document.getElementById("reload").style.color = "black";
    userWins = 0; compWins = 0; totalGames = 0;
    compMove.innerHTML = "";
    message.innerHTML = "";
    scoreBoard.innerHTML = "";
    total.innerHTML = "";
}