function showResults(playerName, trueAnswers, falseAnswers) {
    // Get references to various elements in the DOM
    const gameContainer = document.getElementById("game-container");
    const result = document.getElementById("result");
    const name = document.getElementById("name");
    const message = document.getElementById("message");
    const mayTrueAnswoers = document.getElementById("trueAnswoers");
    const mayFalseAnswers = document.getElementById("falseAnswers");
    const allMayAnswers = document.getElementById("allAnswers");
  
    // Hide the game container and display the result container
    gameContainer.style.display = "none";
    result.style.display = "block";
  
    // Set the player's name in the result message
    name.textContent = playerName;
    
    // Set the message displayed in the result
    message.textContent = "حظاً أوفر المرة القادمة"; // "Better luck next time" in Arabic
    
    // Display the number of true, false, and total answers
    mayTrueAnswoers.textContent = `إجاباتك الصحيحة: ${trueAnswers}`;
    mayFalseAnswers.textContent = `إجاباتك الخاطئة: ${falseAnswers}`;
    allMayAnswers.textContent = `أجاباتك الكلية: ${trueAnswers + falseAnswers}`;
  
    // Pause the background sound (assuming there's a sound named 'backGround')
    backGround.pause();
  
    // Set the 'loop' property of the 'mockery' sound to true and play it
    mockery.loop = true;
    mockery.play();
  }
  