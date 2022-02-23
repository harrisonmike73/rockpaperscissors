
    let playerScore = 0
    let computerScore = 0
    
    const choices = ["rock", "paper", "scissors"];
   
 
            // Asks the user to input rock, paper, or scissors and returns answer to lower case.
        
            
        function computerSelection() 
        // generates random number between 0-2. Uses 'const choices' to return rock, paper, or scissors.
        {
           return choices [Math.floor(Math.random()* 3)];
        }


         function playRound ( computerSelection) 
         {
         //console.log(playerSelection, computerSelection)
         
            playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
             // rock logic
             console.log(playerSelection, computerSelection)
                if (playerSelection == "rock" && computerSelection == "rock") {
                    return alert ("It\'s a draw!");
                } else if (playerSelection == "rock" && computerSelection == "paper") {
                    computerScore += 1;
                    return alert ("You lose! Paper covers rock!")
                    
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    playerScore += 1;
                    return alert ("You win! Rock smashes scissors!")
                     
                }
            // paper logic
                if (playerSelection == "paper" && computerSelection == "paper") {
                    return alert ("It\'s a draw!");
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    playerScore += 1; 
                    return alert ("You win! Paper covers rock!")
                    
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    computerScore += 1;
                    return alert ("You lose! Scissors cuts paper!")
                    
                }
            // scissors logic
                if (playerSelection == "scissors" && computerSelection == "scissors") {
                    return alert ("It\'s a draw!"); 
                }  else if (playerSelection == "scissors" && computerSelection == "rock") {
                    computerScore += 1; 
                    return alert ("You lose! Rock smashes scissors!")
                    
                }  else if (playerSelection == "scissors" && computerSelection == "paper") {
                    playerScore += 1;
                    return alert ("You win! Scissors cuts paper!")
                    
                }   
                else {
                    return console.log("Incorrect Input")
                }
                
            
            }
            //check to see who has the most wins or if it is equal and if someone wins all 5.
            function game() 
            {
                for (let i = 0; i <= 4; i++) {
                    playRound(computerSelection())
                 if (playerScore == 3) {
                        return alert("You win the game!");
                    }

                    else if (computerScore == 3) {
                        return alert("You lose.. better luck next time.")
                        }
                else if(i === 4)
                {
                    return alert("End of Five Rounds. Player Score: " + playerScore + " Computer Score: " + computerScore )

                }}
            logWins();
        }
        

            function logWins() {
                    
            }       

    