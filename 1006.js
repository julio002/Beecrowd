var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var e = parseFloat(lines[2]);

var c = 2;
var d = 3;
var f = 5;

var x = (((a * c) + (b * d) + (e * f))/ (c + d + f)).toFixed(1);

console.log(`MEDIA = ${x}`);