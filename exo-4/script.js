// you can write js here

console.log('exo-4');

const secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.table(secretMessage);
console.log(secretMessage.length);
console.log("Last index - " + secretMessage[secretMessage.length - 1]);

secretMessage.pop();     // Метод pop() видаляє останній елемент з кінця масиву. Якщо масив порожній, метод повертає undefined.
console.log(secretMessage.length);
console.log("Last index - " + secretMessage[secretMessage.length - 1]);


secretMessage.push("to", "program");  // Метод push() додає останній елемент в кінця масиву.
console.log(secretMessage.length);
console.log("Last index - " + secretMessage[secretMessage.length - 1]);

console.log(secretMessage.indexOf("easily"))
secretMessage[6] = "right";
console.log(secretMessage[6]);


secretMessage.shift();    // remove first element
console.log(secretMessage[0])

secretMessage.unshift("Programming");  // add first element
console.log(secretMessage[0])



console.log(secretMessage.indexOf('get'))
secretMessage.splice(5,5, "know")
console.log(secretMessage[5]);

console.log(secretMessage.join(" ")); 








/*const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i < friends.length; i += 1) {
  friends[i] = friends[i] + `-${i}`;
}

// for (let friend of friends) {
//   console.log(friend);
// }

console.table(friends);*/
