var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);

var c = 4/3
var d = 3.14159
var e = Math.pow(a , 3)

var f = (c*d*e).toFixed(3);

console.log(`VOLUME = ${f}`)