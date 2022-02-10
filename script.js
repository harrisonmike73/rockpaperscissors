
    let playerScore = 0
    let computerScore = 0
    
    const choices = ["rock", "paper", "scissors"];
 
            // Asks the user to input rock, paper, or scissors and returns answer to lower case.
        
            let playerSelection = prompt("Do you choose Rock, Paper or scissors?").toLowerCase();
    
            // generates random number between 0-2. Uses 'const choices' to return rock, paper, or scissors.
        function computerSelection() {
           return choices [Math.floor(Math.random()* 3)];
        }


         function playRound (playerSelection, computerSelection) 
         {
             // rock logic

                if (playerSelection == "rock" && computerSelection == "rock") {
                    return "It/'s a draw!";
                } else if (playerSelection == "rock" && computerSelection == "paper") {
                    return "You lose! Paper covers rock!"
                    computerScore += 1;
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    return "You win! Rock smashes scissors!"
                    playerScore += 1; 
                }
            // paper logic
                if (playerSelection == "paper" && computerSelection == "paper") {
                    return "It/'s a draw!";
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    return "You win! Paper covers rock!"
                    playerScore += 1; 
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    return "You lose! Scissors cuts paper!"
                    computerScore += 1;
                }
            // scissors logic
                if (playerSelection == "scissors" && computerSelection == "scissors") {
                    return "It/'s a draw!"; 
                }  else if (playerSelection == "scissors" && computerSelection == "rock") {
                    return "You lose! Rock smashes scissors!"
                    computerScore += 1; 
                }  else if (playerSelection == "scissors" && computerSelection == "paper") {
                    return "You win! Scissors cuts paper!"
                    playerScore += 1;
                }   
                    else return "Something went wrong. Please try again.";
         
                }
           
         if (playerScore = 5) {
         alert("You win the game!");}
         else if (computerScore = 5) {
             alert("You lose.. better luck next time.")
         }

            function game() {
                
            }
         
         console.log(playRound(playerSelection, computerSelection()));
                
                

    