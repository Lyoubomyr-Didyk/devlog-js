// you can write js here
console.log('hello from file');

var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
const celsius = kelvins - 273;
console.log("Aujourd'hui la température est de:",celsius,"celsius");
const fahrenheits = celsius * (9/5) +32;
console.log("Aujourd'hui la température est de:",Math.floor(fahrenheits),"fahrenheits");
