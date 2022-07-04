var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");
var p2 = lines[1].split(" ");

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);
var c = parseFloat(p1[2]);
var d = parseFloat(p2[0]);
var e = parseFloat(p2[1]);
var f = parseFloat(p2[2]);

var x = ((b*c)+(e*f)).toFixed(2)

console.log(`VALOR A PAGAR: R$ ${x}`)