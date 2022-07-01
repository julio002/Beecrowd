var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines[0]);

var n = 3.14159

var s = r * r

const x = (n * s).toFixed(4);

console.log(`A=${x}`)