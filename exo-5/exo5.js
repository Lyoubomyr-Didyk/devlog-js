// you can write js here

console.log('exo-5');

let input = prompt("Write something")

const vowels = ["a", "e", "i", "o", "u", "y"];

let resultArray = [];


for(i=0; i < input.length; i ++){
console.log(i + " = " + input[i])
    for(j = 0; j < vowels.length; j ++){
        console.log(vowels[j]);
    if (input[i] == vowels[j]){
        resultArray.push(input[i]);
    }
    } 
  }
console.log(resultArray.join('').toUpperCase());



/*for(i=0; i < input.length; i += 1){
    console.log(i + " = " + input[i])
    console.log(vowels.indexOf(input[i]));
       
    }*/
