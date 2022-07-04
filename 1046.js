var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");

var a = parseInt(p1[0]);
var b = parseInt(p1[1]);

if (a < b) {
    var total = b - a;
    console.log(`O JOGO DUROU ${total} HORA(S)`)
} else if (a > b) {
    var total = (24 - a) + b
    console.log(`O JOGO DUROU ${total} HORA(S)`)
} else if ( a == b) {
    console.log(`O JOGO DUROU 24 HORA(S)`)
}