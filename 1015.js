var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");
var p2 = lines[1].split(" ");

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);
var c = parseFloat(p2[0]);
var d = parseFloat(p2[1]);

var x = Math.pow(a-c, 2)

var y = Math.pow(b-d, 2)

var z = x + y

var xyz = (Math.sqrt(z)).toFixed(4)

console.log(xyz)