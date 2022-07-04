var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

var x = (a/b).toFixed(3);

console.log(`${x} km/l`);