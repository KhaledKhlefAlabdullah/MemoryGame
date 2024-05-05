function playLevel(level, numCircles) {

  lastRoundFalseAnswers = 0;
  // Get reference to the game container element
  const gameContainer = document.getElementById("game-container");
  const gameContainerWidth = 300; // Width of the game container
  const gameContainerHeight = window.innerHeight * 0.5; // 50vh

  // Clear the game container by removing all its content
  gameContainer.innerHTML = "";

  // Generate circles with random numbers
  for (let i = 0; i < numCircles; i++) {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10);

    // Create a new div element to represent the circle
    const circle = document.createElement("div");

    // Add CSS classes to the circle element for styling
    circle.classList.add("circle", "m-3");

    // Set initial background color of the circle using a random color
    circle.style.backgroundColor = generateRandomColor();

    // Set transition property for smooth color change animation
    circle.style.transition = "background-color 0.5s";

    const circleWidth = `${55.5 - 10.5 * level}px`; // Width of the circle
    const circleHeight = `${55.5 - 10.5 * level}px`; // Height of the circle

    // Set width and height of the circle based on the level
    circle.style.width = circleWidth;
    circle.style.height = circleHeight;

    const randomPosition = generateRandomPosition(
      gameContainerWidth,
      gameContainerHeight,
      parseInt(circleWidth), // Convert circle width to integer
      parseInt(circleHeight) // Convert circle height to integer
    );

    circle.style.position = "absolute";

    circle.style.top = randomPosition.top;
    circle.style.left = randomPosition.left; // Change 'right' to 'left'

    // Set text content of the circle to the generated random number
    circle.textContent = randomNumber;

    // Attach a click event listener to the circle element
    circle.onclick = function () {
      // Call the compare function with the random number and the circle element as arguments
      compare(randomNumber, circle);
    };

    // Append the circle element to the game container
    gameContainer.appendChild(circle);

    // Add the random number to the 'list' array
    list.push(randomNumber);

    // Sort the 'list' array in ascending order
    list = list.sort();

    // Change the background color of the circle to red and remove its text content after a certain time
    setTimeout(() => {
      circle.style.backgroundColor = "red";
      circle.textContent = "";
    }, getTimerForLevel(level)); // Get the time for the level
  }
}

function generateRandomPosition(
  containerWidth,
  containerHeight,
  circleWidth,
  circleHeight
) {
  // Calculate maximum values for top and left positions
  const maxTop = containerHeight - circleHeight;
  const maxLeft = containerWidth - circleWidth;

  // Generate random values for top and left positions
  const randomTop = Math.floor(Math.random() * maxTop);
  const randomLeft = Math.floor(Math.random() * maxLeft);

  return {
    top: randomTop + "px",
    left: randomLeft + "px",
  };
}
