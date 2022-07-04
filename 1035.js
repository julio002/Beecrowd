var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);
var c = parseFloat(p1[2]);
var d = parseFloat(p1[3]);

var e = c + d
var f = a + b

if ( b > c && d > a && e > f && c > 0 && d > 0 && (a % 2 == 0)) {
    console.log("Valores aceitos")
}   else {
    console.log("Valores nao aceitos")
}