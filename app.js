const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else{
    console.log(`Hmm... we don't seem to recognize the word "${userInput}". Try again.`)
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
    	return 'rock';
    case 1:
    	return 'paper';
    case 2:
    	return 'scissors';  
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'This game was a tie.'
  } else {
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Wins'
      } else{ return 'User wins'}
    } else if(userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer wins'
      } else { return 'User wins'}
    } else if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer wins'
      } else {
        return 'User wins'
      }
    }
  }
}

const playGame = () =>{
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();