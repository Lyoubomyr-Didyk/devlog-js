// you can write js here
console.log('exo-2');

let isTesting = false;
const myDate = new Date('May 26, 2023 17:00:00 GMT+02:00'); //"May 28, 2023"  'May 26, 2023 16:00:00 GMT+02:00'
console.log(myDate);

const semaine = "Aujourd'hui nous somme dans la semaine";
const weekend = "Aujourd'hui nous somme en weekend";

let currentDay = myDate.getDay();
let currentTime = myDate.getHours();

if(isTesting){
    currentDay = prompt("Enter date please");
    currentTime = prompt("Enter hours please");
}else{
    currentDay = myDate.getDay();
    currentTime = myDate.getHours();
}


if(currentDay > 0 && currentDay < 6){
    if(currentDay == 5 && currentTime > 17 || currentDay == 1 && currentTime < 9){
        console.log(weekend);
    }else {
        console.log(semaine);}
}else {
    console.log(weekend);
}