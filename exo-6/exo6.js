// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 


console.log("Joe a",joeInfo.cars.length,"voiture");  // 1

joeInfo.bathrooms = "une";       // 2
console.log("Joe a",joeInfo.bathrooms, "salles de bain.");

joeInfo.garage = true;          // 3
console.log(joeInfo.garage)

//_________________________________________________________________________

let myTeam ={};

myTeam.players = [];  
myTeam.games = [];

myTeam.players.push({
  firstName: "Pablo",
  lastName:"Sanchez",
  age: 11
});

myTeam.games.push({
  opponent: "RedBulls",
  teamPoints: 42,
  opponentPoints: 27
})

//--------------------------------------------
myTeam.addPlayers = function (prenom, nom, age){

  this.players.push({firstName: prenom, lastName: nom, age: age})
}

myTeam.addPlayers("Alex", "Zidane", 25)
myTeam.addPlayers("Romeo", "Lukaku", 21)
myTeam.addPlayers("Antoine", "Rouler", 32)
myTeam.addPlayers("Clark", "Manes", 41)
myTeam.addPlayers("Nemo", "Flick", 29)

//---------------------------------------------
myTeam.addGames = function (opponent, teamPoints, opponentPoints ){

  this.games.push({opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints})
}

myTeam.addGames("RedBulls", 40, 25)
myTeam.addGames("RedBulls", 48, 35)
myTeam.addGames("RedBulls", 54, 15)
myTeam.addGames("RedBulls", 32, 23)
myTeam.addGames("RedBulls", 41, 21)


console.table(myTeam.players)
console.table(myTeam.games)

let totalPoints = 0;
for(i=0; i < myTeam.games.length; i ++){
  console.log(myTeam.games[i].opponentPoints)
}


let total = 0;
for( const key in myTeam.games){
total += myTeam.games[key].teamPoints;
console.log(key)
}
console.log(total)
