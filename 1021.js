var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);

var notas = [100, 50, 20, 10, 5, 2];
var centavos = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")

for ( var nota of notas) {
    var resNot = parseInt(a / nota);
    console.log(`${resNot} nota(s) de R$ ${nota}.00`)
    a = a % nota
}

console.log("MOEDAS:")

for ( var centavo of centavos ) {
    var resCent = parseInt(a / centavo)
    console.log(`${resCent} moeda(s) de R$ ${centavo.toFixed(2)}`)
    a = (a % centavo) + 0.00001;
}