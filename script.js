
    let playerScore = 0
    let computerScore = 0
    
    const choices = ["rock", "paper", "scissors"];
 
            // Asks the user to input rock, paper, or scissors and returns answer to lower case.
        
            //let playerSelection = prompt("Do you choose Rock, Paper or scissors?").toLowerCase();
    
            // generates random number between 0-2. Uses 'const choices' to return rock, paper, or scissors.
        function computerSelection() {
           return choices [Math.floor(Math.random()* 3)];
        }


         function playRound ( computerSelection) {
         //console.log(playerSelection, computerSelection)
         
            playerSelection = prompt("Do you choose Rock, Paper or scissors?").toLowerCase();
             // rock logic
             console.log(playerSelection, computerSelection)
                if (playerSelection == "rock" && computerSelection == "rock") {
                    alert ("It\'s a draw!");
                } else if (playerSelection == "rock" && computerSelection == "paper") {
                    alert ("You lose! Paper covers rock!")
                    computerScore += 1;
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    alert ("You win! Rock smashes scissors!")
                    playerScore += 1; 
                }
            // paper logic
                if (playerSelection == "paper" && computerSelection == "paper") {
                    alert ("It\'s a draw!");
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    alert ("You win! Paper covers rock!")
                    playerScore += 1; 
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    alert ("You lose! Scissors cuts paper!")
                    computerScore += 1;
                }
            // scissors logic
                if (playerSelection == "scissors" && computerSelection == "scissors") {
                    alert ("It\'s a draw!"); 
                }  else if (playerSelection == "scissors" && computerSelection == "rock") {
                    alert ("You lose! Rock smashes scissors!")
                    computerScore += 1; 
                }  else if (playerSelection == "scissors" && computerSelection == "paper") {
                    alert ("You win! Scissors cuts paper!")
                    playerScore += 1;
                }   
                    else alert ("Something went wrong. Please try again.");
         
                }
           
         //check to see who has the most wins or if it is equal and if someone wins all 5.
            function game() {
                for (let i = 0; i < 5; i++) {
                    playRound( computerSelection())
                 if (playerScore == 5) {
                        alert("You win the game!");}
                        else if (computerScore == 5) {
                        alert("You lose.. better luck next time.")
                        }
                } 
            }
         game();
         //console.log(playRound( computerSelection()));
                
                

    