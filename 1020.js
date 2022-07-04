var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);

var days = [365, 30, 1];
var res = [];

for ( var day of days ) {
    res.push(parseInt(a / day))
    a = a % day
}

console.log(`${res[0]} ano(s)`)
console.log(`${res[1]} mes(es)`)
console.log(`${res[2]} dia(s)`)