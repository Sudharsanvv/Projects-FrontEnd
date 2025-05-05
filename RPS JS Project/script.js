const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");
        const result = document.getElementById("result");

        rock.addEventListener("click", () => handleUserChoice("rock"));
        paper.addEventListener("click", () => handleUserChoice("paper"));
        scissors.addEventListener("click", () => handleUserChoice("scissors"));

        function handleUserChoice(userChoice) {
            const choices = ["rock", "paper", "scissors"];
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            let outcome = "";

            if (userChoice === computerChoice) {
                outcome = "It's a tie!";
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                outcome = "You win!";
            } else {
                outcome = "You lose!";
            }

            result.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${outcome}`;
        }

