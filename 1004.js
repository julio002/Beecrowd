var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines[0]);
var s = parseFloat(lines[1])

var x = r * s

console.log(`PROD = ${x}`)