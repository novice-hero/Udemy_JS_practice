const p1 = {
  score: 0,
  button: document.querySelector(".p1Button"),
  display: document.querySelector(".p1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector(".p2Button"),
  display: document.querySelector(".p2Score"),
};

const $scoreView = document.querySelector(".scoreView");
const $scoreBox = document.querySelector(".scoreBox");
const $resetBtn = document.querySelector(".reset");

let isGameOver = false;
let winScore = 9999;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

$scoreBox.addEventListener("change", (e) => {
  const combovalue = e.target.value;
  winScore = Number(combovalue);
  reset();
});

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});
$resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("loser", "winner");
    p.button.disabled = false;
  }
}
