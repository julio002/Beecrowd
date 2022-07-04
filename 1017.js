var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

var c = ((a * b) /12).toFixed(3)

console.log(c)