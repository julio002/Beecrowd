var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);

var secs = [3600, 60, 1];
var res = [];

for ( var sec of secs) {
    res.push(parseInt(a / sec))
    a = a % sec
};

console.log(`${res[0]}:${res[1]}:${res[2]}`);