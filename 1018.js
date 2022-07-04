var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var result = parseFloat(lines[0]);

var notas = [100, 50, 20, 10, 5, 2, 1];

console.log(result);

for (var nota of notas) {
    var resultNotas = parseInt(result / nota);
    console.log(`${resultNotas} nota(s) de R$ ${nota},00`)
    result = result % nota;
};