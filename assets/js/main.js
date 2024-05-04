const mockery = new Audio("assets/audios/mockery.mp3");
const backGround = new Audio("assets/audios/back-ground-sound.mp3");

const successSound = new Audio("assets/audios/success.mp3");
const failureSound = new Audio("assets/audios/failure.mp3");

const log = console.log;

let timer = 0;
let list = [];
let allAnswers = 0;
let falseAnswers = 0;
let lastRoundFalseAnswers = 0;
let trueAnswers = 0;

let playerName;
let gameLevel;
let numCircles = 2;
let countdownElement;

function start() {
  document.getElementById("welcome-screen").style.display = "block";
  document.getElementById("start-screen").style.display = "none";

  backGround.loop = true;
  backGround.play();
}

function startGame() {
  playerName = document.getElementById("player-name").value;
  gameLevel = parseInt(document.getElementById("game-level").value);
  timer = parseInt(document.getElementById("duration").value);

  if (!playerName || !gameLevel || !timer) return;

  // Hide welcome screen and show game container
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-container").style.display = "block";

  playLevel(gameLevel, numCircles);

  // Create a countdown element and append it to the body
  countdownElement = document.createElement("div");
  countdownElement.id = "countdown";
  document.body.appendChild(countdownElement);
  // Start the countdown
  startCountdown(timer, countdownElement);

  // Start the game level after the countdown
  setTimeout(() => {
    showResults(playerName, trueAnswers, falseAnswers);
  }, timer * 1000);
}

// Function to start the countdown
function startCountdown(duration, element) {
  let timeLeft = duration;
  element.innerText = `الوقت المتبقي: ${timeLeft} ثوان`;


  const countdownInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      element.innerText = "أنتهى الوقت ياوااااارد";
    } else {
      if (timeLeft <= 10) {
        element.classList.add('red');
      } else {
        element.classList.remove('red');
      }
      element.innerText = `الوقت المتبقي: ${timeLeft} ثوان`;
    }
  }, 1000);
}

