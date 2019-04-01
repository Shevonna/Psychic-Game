var letterOptions = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                      "n","o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChioce = letterOptions[Math.floor(Math.random() * letterOptions.length)];
console.log("Computer Choice", computerChioce);
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var userChioce = [""];




  document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("current guesses", userGuess);
    
      if (userGuess === computerChioce) {
        wins++;
        guessesLeft = 9;
        userGuess = "";
        userChioce = [];
        computerChioce = letterOptions[Math.floor(Math.random() * letterOptions.length)];
        console.log("Computer Choice", computerChioce);
      }
      else {
         guessesLeft--; 
        userChioce.push(userGuess); 
      }
      if (guessesLeft === 0) {
        loses++;
        guessesLeft = 9;
        userChioce = []; 
        computerChioce = letterOptions[Math.floor(Math.random() * letterOptions.length)];
      }
     

      document.getElementById("winner").innerHTML = wins;
      document.getElementById("loser").innerHTML = loses;
      document.getElementById("guesses").innerHTML = guessesLeft;
      document.getElementById("current guesses").innerHTML = userChioce;
    }