const player1Label = document.querySelector("#player-score-1");
const player2Label = document.querySelector("#player-score-2");
const selectMax = document.querySelector("#max-score");
const buttonPlayer1 = document.querySelector("#player-1");
const buttonPlayer2 = document.querySelector("#player-2");
const buttonReset = document.querySelector("#reset");

let maxValue = Number(selectMax.value);
let gameOver = false;
let p1Score = 0;
let p2Score = 0;

const resetScore = () => {
    player1Label.innerHTML = 0;
    player2Label.innerHTML = 0;
    p1Score = 0;
    p2Score = 0;
    player1Label.style = "";
    player2Label.style = "";
    gameOver = false;
};

const winningEvent = () => {
    gameOver = true;
    if (p1Score == maxValue) {
        player1Label.style = "background-color: green;";
        player2Label.style = "background-color: red;";
    } else {
        player2Label.style = "background-color: green;";
        player1Label.style = "background-color: red;";
    }
};

selectMax.addEventListener("change", (e) => {
    resetScore();
    maxValue = Number(e.target.value);
});

buttonReset.addEventListener("click", resetScore);

buttonPlayer1.addEventListener("click", () => {
    if (!gameOver) {
        p1Score += 1;
        player1Label.innerHTML = p1Score;
        if (p1Score == maxValue) winningEvent();
    }
});

buttonPlayer2.addEventListener("click", () => {
    if (!gameOver) {
        p2Score += 1;
        player2Label.innerHTML = p2Score;
        if (p2Score == maxValue) winningEvent();
    }
});
