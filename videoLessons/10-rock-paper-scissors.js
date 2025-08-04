
  let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
};
updateScore();
let result = '';

  function playGame(playerMove) {
  const computerMove = pickMove();

    if (playerMove === 'scissors'){   
      if (computerMove === 'rock'){result =  'You Lose';} 
      else if (computerMove === 'paper'){result = 'You Win';}
      else if (computerMove === 'scissors'){result = 'Tie';}
    }

    else if (playerMove  === 'rock'){ 
      if (computerMove === 'rock'){result = 'Tie';} 
      else if (computerMove === 'paper'){result = 'You Win';} 
      else if (computerMove === 'scissors'){result = 'You Lose';}
    }

    else if (playerMove === 'paper'){ 
      if (computerMove === 'rock'){result = 'You Win';} 
      else if (computerMove === 'paper'){result = 'Tie';} 
      else if (computerMove === 'scissors'){result = 'You Lose';}
    }

    if (result === 'You Win'){score.wins+= 1}
    else if (result === 'You Lose'){score.losses+= 1}
    else if (result === 'Tie'){score.ties+= 1}

    localStorage.setItem('score', JSON.stringify(score));

updateScore();

document.querySelector('.movesBar').innerHTML = `You
<img src="${playerMove}.jpeg">
<img src="${computerMove}.jpeg">
Computer`;

document.querySelector('.infoBar').innerHTML = result;
  }  


  function pickMove (){
    const randomNumber = Math.random();
    let computerMove = '';
      if (randomNumber >=0 && randomNumber < 1/3){computerMove ='rock';} 
      else if (randomNumber >=1/3 && randomNumber < 2/3){computerMove = 'paper';} 
      else if (randomNumber >=2/3 && randomNumber < 3){computerMove = 'scissors';}
      return computerMove;
    }

function updateScore(){
document.querySelector('.scoreBar').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, tie: ${score.ties}`;
}

