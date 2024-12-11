//  Ask for the player's name
let playerName = prompt("Please enter your name to get started:");
//Conditions to continue the game or error message appears when click on Cancel
if (playerName == null || playerName.length == 0) {
  document.getElementById("error-message").innerHTML =
    "Please Press F5 to Play Again";
  document.getElementById("title").style.display = "none";
  document.getElementById("center").style.display = "none";
  document.getElementById("farewell-container").style.display = "none";
} else {
  // Welcome Player to the Arcade
  alert(`Hi ${playerName}! Welcome to the Arcade. What would you like to do?`);
}

// Define statistic variables
let numPlay1 = 0;
let numPlay2 = 0;
let numPlay3 = 0;
let winCount = 0;
let lossCount = 0;
let totalPlay = 0;
let percentWin = 0;

//  Ask player if they want to continue Playing Session
function moreGame() {
  let newGame = true;
  let numGame = 0;
  let anotherGame = prompt(
    `${playerName}, Would you like to pick another game to play? yes/no`
  );

  // Statistics Calculation
  totalPlay = numPlay1 + numPlay2 + numPlay3;
  percentWin = (winCount / totalPlay) * 100;

  if (anotherGame.toLowerCase() == "yes") {
    newGame = true;
    numGame++;
  } else if (
    anotherGame.toLowerCase() == "no" ||
    anotherGame.toLowerCase() == null
  ) {
    newGame = false;
    //Display in the HTML view a farewell message and a Button that reloads the page just like the first time
    document.getElementById("center").style.display = "none";
    document.getElementById("farewell-container").style.display = "block";
    document.getElementById("stat").innerHTML = `<table><tr>
      <th>Total Number of Games Played</th>
      <th>Number of Wins</th>
      <th>Percentage of Wins of Playing Session</th>
    </tr>
    <tr>
      <td>${totalPlay}</td>
      <td>${winCount}</td>
      <td>${percentWin} %</td>
    </tr></table>`;
    document.getElementById("badge").innerHTML = `Badge Awarded: ${badgeAward}`;
  } else {
    newGame = true;
  }
}

// GUESSING GAME - Declaration function
function guessingGame() {
  let userInput1 = null;
  do {
    //Generate a random value between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);

    // Prompt asking user to enter the number they guess
    let input = prompt("Guess a number between 1 and 10.");
    let count = 1;

    // Calculate how many guesses player makes
    while (parseInt(input) !== randomNumber) {
      if (parseInt(input) > randomNumber) {
        count += 1;
        input = prompt("Guess was too high, guess again.");
        continue;
      } else if (parseInt(input) < randomNumber) {
        count += 1;
        input = prompt("Guess was too low, guess again.");
        continue;
      } else if (input == null || input.length == 0) {
        count += 1;
        input = prompt("Please enter a number between 1 and 10.");
        continue;
      } else {
        count += 1;
        alert("You are correct!");
        break;
      }
    }
    alert(`You guessed it in ${count} guesses!`);

    userInput1 = prompt(
      `${playerName}, Would you like to keep playing game? yes/no`
    );

    if (userInput1.toLowerCase() == "no" || userInput1.toLowerCase() == null) {
      console.log(numPlay1);
      numPlay1++;
      break;
    } else if (userInput1.toLowerCase() == "yes") {
      numPlay1++;
      console.log(`Number of games played: ${numPlay1}`);
    } else if (userInput1.toLowerCase() == null || userInput1.length == 0) {
      userInput1 = "Invalid choice. Please enter Yes or No.";
    }
  } while (userInput1.toLowerCase() == "yes" ? true : false);
  moreGame();
}

// MAGIC EIGHT BALL - Expression function
let consultOracle = function () {
  let userInput2 = null;

  do {
    // Prompt the player for their question.
    input = prompt(
      "Think of a question that can be answered yes no. Then let Magic Eight Ball shows you the future..."
    );

    // Use a randomizer to select one answer per question to display to the asker.
    const strArray = [
      "It is uncertain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Reply hazy, try again.",
      "I do not think so.",
      "As I see it, yes.",
      "Most Likely.",
      "Outlook good.",
    ];
    let answer = strArray[Math.floor(Math.random() * strArray.length)];
    console.log(answer);
    alert(answer);

    // Repeat until the user chooses to stop.
    userInput2 = prompt(
      `${playerName}, Do you want to ask another question? yes/no`
    );

    if (userInput2.toLowerCase() == "no" || userInput2.toLowerCase() == null) {
      numPlay2++;
      break;
    } else if (userInput2.toLowerCase() == "yes") {
      numPlay2++;
      console.log(`Number of games played: ${numPlay2}`);
    } else if (userInput2.toLowerCase() == null || userInput2.length == 0) {
      userInput2 = "Invalid choice. Please enter Yes or No.";
    }
  } while (userInput2.toLowerCase() == "yes" ? true : false);

  // When the asker chooses to stop, present a farewell message of your creation.
  alert(
    "Hope Magic Eight Ball helps answer your question. May your new endeavor be everything you have dreamed of and more!"
  );
  moreGame();
};

// BEAR NINJA HUNTER - Arrow function
let bnh = () => {
  let userInput3 = null;

  // Present a text field to gather user input. Store the user's input in a variable.
  alert(`Welcome to Bear Hunter Ninja ${playerName}!`);

  do {
    //Computer randomizes a choice within the array
    const myArray = ["Bear", "Hunter", "Ninja"];
    let computerchoice = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(computerchoice);

    // Ask Player to pick an option
    let userchoice = prompt("Who are you: Bear, Ninja, or Hunter?");
    let result;

    while (
      userchoice.toLowerCase() !== "bear" &&
      userchoice.toLowerCase() !== "hunter" &&
      userchoice.toLowerCase() !== "ninja"
    ) {
      userchoice = prompt(
        "Invalid option. Please enter either Bear, Ninja, or Hunter"
      );
    }
    // Determine game winner based on this set of game rules. Bear beats Ninja, Ninja beats Hunter, and Hunter beats Bear.
    if (computerchoice == "Bear") {
      switch (userchoice.toLowerCase()) {
        case "bear":
          result = "Tie";
          break;
        case "hunter":
          result = "User wins";
          break;
        case "ninja":
          result = "Computer wins";
          break;
      }
    } else if (computerchoice == "Ninja") {
      switch (userchoice.toLowerCase()) {
        case "bear":
          result = "User wins";
          break;
        case "hunter":
          result = "Computer wins";
          break;
        case "ninja":
          result = "Tie";
          break;
      }
    } else if (computerchoice == "Hunter") {
      switch (userchoice.toLowerCase()) {
        case "bear":
          result = "Computer wins";
          break;
        case "hunter":
          result = "Tie";
          break;
        case "ninja":
          result = "User wins";
          break;
      }
    }

    // Win loss condition
    if (result == "Tie") {
      result = "It is a tie!";
    } else if (result == "User wins") {
      result = "You win!!";
      winCount++;
    } else if ("Computer wins") {
      result = "You lose...";
      lossCount++;
    }

    // Count down 1, 2, 3 before displaying the result
    alert(
      `${playerName}, You picked ${userchoice}. \nThe computer picked ${computerchoice}! \nResult: ${result}`
    );

    // Console displays result message
    console.log(
      `${playerName}, You picked ${userchoice}. \nThe computer picked ${computerchoice}! \nResult: ${result}`
    );

    //Ask if Player wants to resume the game
    numPlay3;
    userInput3 = prompt(
      `${playerName}, Would you like to play again Yes or No?`
    );

    if (userInput3.toLowerCase() == "no") {
      numPlay3++;
      break;
    } else if (userInput3.toLowerCase() == "yes") {
      numPlay3++;
      console.log(`Number of games played: ${numPlay3}`);
    } else if (userInput3.toLowerCase() == null || userInput3.length == 0) {
      userInput3 = "Invalid choice. Please enter Yes or No.";
    }
  } while (userInput3.toLowerCase() == "yes" ? true : false);
  moreGame();
};

// Badge Awards based on the Percentage Wins
let badgeAward;
switch (true) {
  case percentWin >= 0 && percentWin <= 25:
    badgeAward = "Stone";
  case percentWin >= 26 && percentWin <= 50:
    badgeAward = "Bronze";
  case percentWin >= 51 && percentWin <= 75:
    badgeAward = "Iron";
  case percentWin >= 76 && percentWin <= 100:
    badgeAward = "Silicon";
}

console.log(badgeAward);
