let userScore = document.getElementById('user-score')
let computerScore = document.getElementById('compter-score')

const rock = document.getElementById('rock');
const paper= document.getElementById('paper');
const scissors= document.getElementById('scissors');

let result = document.getElementById('result');


function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const number = Math.floor(Math.random() * 3);
    return choices[number];
  }

function userChoice(userValue) {

   let computerValue = computerChoice();
   console.log('user', userValue);
   console.log('computer',computerValue);
    game(userValue,computerValue)
    
  }

  function game(userValue,computerValue){

   if(userValue == computerValue)
    result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, It's a tie `

    if(userValue === 'paper'){
        switch(computerValue){
            case 'rock':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you win! `
                userScore.innerText =parseInt(userScore.innerText)+1;
                break;

            case 'scissors':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you lose! `
                computerScore.innerText =parseInt(computerScore.innerText)+1;
                break;
        }
    }
    if (userValue === 'rock'){
        switch(computerValue){
            case 'paper':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you lose! `
                computerScore.innerText =parseInt(computerScore.innerText)+1;
            break;

            case 'scissors':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you win! `
                userScore.innerText =parseInt(userScore.innerText)+1;
            break;
        }
    }
    if(userValue === 'scissors'){
        switch(computerValue){
            case 'rock':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you lose! `
                computerScore.innerText =parseInt(computerScore.innerText)+1;
            break;

            case 'paper':
                result.innerText = `you choosed ${userValue} and the computer choosed ${computerValue}, you win! `
                userScore.innerText =parseInt(userScore.innerText)+1;
            break;
        }
    }
    removeEventListener


  }