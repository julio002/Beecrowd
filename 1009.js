var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[1]);
var b = parseFloat(lines[2]);

var c = (b*0.15)

var d = (a + c).toFixed(2)

console.log(`TOTAL = R$ ${d}`)