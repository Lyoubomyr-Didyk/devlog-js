// you can write js here
console.log('exo-2');
const myDate = new Date(); //"May 28, 2023"
console.log(myDate);


const semaine = "Aujourd'hui nous somme dans la semaine";
const weekend = "Aujourd'hui nous somme en weekend";
const currentDay = myDate.getDay();
console.log(currentDay);
const currentTime = myDate.getTime();

if(currentDay > 0 && currentDay < 6){
    if(currentTime >= 17){
        console.log(semaine);
    }
}else {console.log(weekend);
} 

console.log(currentTime);
