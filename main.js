let failureTraying, successTraying, timer;
let list = [];

const successSound = new Audio("success.mp3");
const failureSound = new Audio("failure.mp3");

const log = console.log;

function startGame() {
  log("start");
  const playerName = document.getElementById("player-name").value;
  const gameLevel = parseInt(document.getElementById("game-level").value);
  timer = parseInt(document.getElementById("duration").value);
  log(getTimerForLevel(gameLevel) + "  8989");
  // Hide welcome screen and show game container
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-container").style.display = "block";

  playLevel(playerName, gameLevel, 2);
}

function playLevel(playerName, level, numCircles) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = ""; // Clear game container

  // Generate circles with random numbers
  for (let i = 0; i < numCircles; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const circle = document.createElement("div");
    circle.classList.add("circle", "m-3");
    circle.style.backgroundColor = generateRandomColor(); // Initial color
    circle.style.transition = "background-color 0.5s"; // Smooth transition
    circle.style.width = `${22.5 - 2.5 * level}px`;
    circle.style.height = `${22.5 - 2.5 * level}px`;

    circle.onclick = function () {
      compare(randomNumber);
    }; // Pass the index to the compare function when clicked
    // Display random number in circle for a short duration
    circle.textContent = randomNumber;
    gameContainer.appendChild(circle);

    list.push(circle.textContent);
    list = list.sort();

    log(list[0]);

    setTimeout(() => {
      circle.style.backgroundColor = "red"; // Change color
      circle.textContent = "";
    }, getTimerForLevel(level));
  }
}

function showResults(playerName) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = ""; // Clear game container
}

function compare(index) {
  if (list[0] == index) {
    successSound.play();
  } else {
    failureSound.play();
  }
}

function generateRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Construct the CSS color string
  return `rgb(${r},${g},${b})`;
}

function getTimerForLevel(level) {
  let levelTime = 1;
  if (level == 1) {
    levelTime = 2;
  } else if (level == 2) {
    levelTime == 1.75;
  } else {
    levelTime == 1;
  }

  return parseInt(levelTime * 1000);
}
