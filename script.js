let playerSelection;

// When button clicked, give the associate value to playerSelection and run the function game
const rock = document.querySelector('#rock')
rock.addEventListener('click', function() {
	playerSelection = "rock";
})
rock.addEventListener('click', game)

const paper = document.querySelector('#paper')
paper.addEventListener('click', function() {
	playerSelection = "paper";
})
paper.addEventListener('click', game)

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', function() {
	playerSelection = "scissors";
})
scissors.addEventListener('click', game)

// Picks a random number between 1 and 3
function computerPlay() {
	let randomNum = Math.floor((Math.random() * 3) + 1)
	return nameOutcome(randomNum);
}
// Associates a name to the number
function nameOutcome(num) {
		switch (num) {
		case 1:
			return "rock";
			break;
		case 2: 
			return "paper";
			break;
		case 3: 
			return "scissors"
			break;
	}
}

// These variables are declared outside the function playRound because their value will be used in another function. (Scope)
let winMessage;
let loseMessage;
let drawMessage;

// Compares playerSelection and computerSelection to evaluate the winner. Returns a message based on who won.
function playRound(playerSelection, computerSelection) {
	let playerProcessed = playerSelection.toLowerCase();
	winMessage = `You win ! ${playerSelection} beats ${computerSelection} !`;
	loseMessage = `You lose... ${computerSelection} beats ${playerSelection}.`;
	drawMessage = "It\'s a draw !";

	if (playerProcessed === "rock" && computerSelection === "paper") {
		return loseMessage;
	}	else if (playerProcessed === "rock" && computerSelection === "scissors") {
		return winMessage;
	}	else if (playerProcessed === "rock" && computerSelection === "rock") {
		return drawMessage;
	} else if (playerProcessed === "paper" && computerSelection === "rock") {
		return winMessage;
	} else if (playerProcessed === "paper" && computerSelection === "scissors") {
		return loseMessage;
	} else if (playerProcessed === "paper" && computerSelection === "paper") {
		return drawMessage;
	} else if (playerProcessed === "scissors" && computerSelection === "paper") {
		return winMessage;
	} else if (playerProcessed === "scissors" && computerSelection === "rock") {
		return loseMessage;
	} else if (playerProcessed === "scissors" && computerSelection === "scissors") {
		return drawMessage;
	}
}

// These variables are declared outside the function because we don't want their value to be reinitiliazed at each game.
let playerScore = 0;
let computerScore = 0;
let drawCount = 0

function game() {

	let game = playRound(playerSelection, computerPlay());

	const result = document.querySelector('#result');
	result.textContent = game;

	(game === winMessage) ? playerScore += 1 : (game === loseMessage) ? computerScore += 1 : drawCount += 1;

	const playerCount = document.querySelector('#player');
	playerCount.textContent = playerScore;

	const computerCount = document.querySelector('#computer');
	computerCount.textContent = computerScore; 

	const	drawCounter = document.querySelector('#draw');
	drawCounter.textContent = drawCount;

	const scoreMessage = `You have ${playerScore} point(s).The computer has ${computerScore} point(s).There has been ${drawCount} draw(s).`;

	let winner;
	
	if (playerScore + computerScore + drawCount === 5) {
			
		if (playerScore > computerScore) {
			winner = "YOU WIN!";
		} else if (computerScore > playerScore) {
			winner = "The computer wins..."
		} else if (computerScore === playerScore) {
			winner = "No winner this time."
		}

		playerScore = 0;
		playerCount.textContent = playerScore;
		computerScore = 0;
		computerCount.textContent = computerScore;
		drawCount = 0
		drawCounter.textContent = drawCount;

		result.textContent = winner + ' ' + scoreMessage;

	}

}


