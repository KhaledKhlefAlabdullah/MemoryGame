// This function compares the content passed with the content of the first item in the 'list' array.
// If the 'element' parameter is undefined or null, it logs an error and returns.
function compare(content, element) {
  if (!element) {
    console.error("Element is undefined or null");
    return;
  }

  // If the first item in the 'list' array matches the provided content:
  if (list[0] === content) {
    // Remove the first item from the 'list' array
    list.shift();
    // Set the text content of the 'element' to the provided 'content'
    element.textContent = content;
    // Set the background color of the 'element' to green
    element.style.backgroundColor = "green";
    // Play a success sound
    successSound.play();
    // Increment the trueAnswers counter
    trueAnswers++;
  } else {
    // If the content doesn't match:
    // Store the current background color of the 'element'
    let oldColor = element.style.backgroundColor;
    // Set the background color of the 'element' to red
    element.style.backgroundColor = "red";
    // Increment the falseAnswers counter
    falseAnswers++;
    // Increment the lastRoundFalseAnswers counter
    lastRoundFalseAnswers++;
    // Play a failure sound
    failureSound.play();
    // After 1000 milliseconds (1 second), restore the original background color of the 'element'
    setTimeout(() => {
      element.style.backgroundColor = oldColor;
    }, 1000);
  }

  // If the 'list' array is empty:
  if (list.length == 0) {
    // If there were any false answers in the last round, decrement 'numCircles', otherwise increment it
    if (lastRoundFalseAnswers > 0) {
      numCircles--;
    } else {
      numCircles++;
    }
    
    // Call the 'playLevel' function with the 'gameLevel' and 'numCircles' parameters
    playLevel(gameLevel, numCircles);
  }
}

// This function generates a random RGB color and returns it as a string in the format 'rgb(r,g,b)'
function generateRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Construct the CSS color string
  return `rgb(${r},${g},${b})`;
}

// This function returns the time (in milliseconds) allowed for a given level
function getTimerForLevel(level) {
  let levelTime = 1; // Default level time
  if (level === 1) {
    levelTime = 2; // If level 1, set level time to 2 seconds
  } else if (level === 2) {
    levelTime = 1.75; // If level 2, set level time to 1.75 seconds
  } else {
    levelTime = 1; // For other levels, set level time to 1 second
  }

  return parseInt(levelTime * 1000); // Convert level time to milliseconds and return
}
