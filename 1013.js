var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(" ").map(item => parseInt(item))

var x = ((a + b + Math.abs(a - b)) /2);
var y = ((c + x + Math.abs(c - x)) /2);

console.log(`${y} eh o maior`);