var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");

var a = parseFloat(p1[0]);

function res(a) {
    switch(a) {
        case 61:
            console.log(`Brasilia`)
            break
        case 71:
            console.log(`Salvador`)
            break
        case 11:
            console.log(`Sao Paulo`)
            break
        case 21:
            console.log(`Rio de Janeiro`)
            break
        case 32:
            console.log(`Juiz de Fora`)
            break
        case 19:
            console.log(`Campinas`)
            break
        case 27:
            console.log(`Vitoria`)
            break
        case 31:
            console.log(`Belo Horizonte`)
            break
        default:
            console.log(`DDD not found`)
            break
    }
}

res(a)