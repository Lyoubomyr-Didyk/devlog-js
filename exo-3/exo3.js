// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper, scissors) ?") 
playerInput = playerInput.toLowerCase();


/*-----------------------------------------------------------------------------*/

function getPlayerChoice(choice){
    if(choice == "rock" || choice == "paper" || choice == "scissors" || choice == "bomb" ){
        const result = choice;
        return result;
    }
    else {
        console.log("please enter one choice only")
    }
}

/*-----------------------------------------------------------------------------*/


function getComputerChoise(){
    const typeChoice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * (typeChoice.lengthrock));
    const result = typeChoice[randomIndex];
    
    return result;
}

/*-----------------------------------------------------------------------------*/


function findWinner(player, computer){
    if(player == computer){
        console.log("Tied");
    }else{
        if(player == "rock"){
            if(computer == "scissors"){
                console.log("Won")
            }else{
                console.log("Lost")
            }
        }else if(player == "paper"){
            if(computer == "rock"){
                console.log("Won")
            }else{
                console.log("Lost")
            }
        }else if(player == "scissors"){
            if(computer == "paper"){
                console.log("Won")
            }else{
                console.log("Lost")
            }
        }else if(player == "bomb"){
            console.log("Won")
        }
    }
}

/*-----------------------------------------------------------------------------*/

function playGame(){
    const userChoice = getPlayerChoice(playerInput);
    console.log(userChoice);
    const computerChoise = getComputerChoise();
    console.log(computerChoise);
    findWinner(userChoice, computerChoise);
}

playGame();




//const findWinner = () => 



/*function findWinner(player, computer){
    if(player == computer){
        console.log("Tied");
    }
     else if(player == "rock" && computer == "scissors" ){
        console.log("Won");
         }
     else if(player == "paper" && computer == "rock" ){
        console.log("Won");
         }
    
     else if(player == "scissors" && computer == "paper" ){
        console.log("Won");
     }
     else{
        console.log("Lost");
    }
}*/