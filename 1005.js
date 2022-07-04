var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1])

var c = 3.5
var d = 7.5

var x = (((a * c) + (b * d))/ (c + d)).toFixed(5)

console.log(`MEDIA = ${x}`)