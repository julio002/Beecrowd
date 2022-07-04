var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);

var b = a * 2

console.log(`${b} minutos`);