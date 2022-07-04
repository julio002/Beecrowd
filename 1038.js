var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(" ");

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);

function res(a,b) {
    switch(a) {
        case 1:
            console.log(`Total: R$ ${(b * 4.00).toFixed(2)}`)
            break
        case 2:
            console.log(`Total: R$ ${(b * 4.50).toFixed(2)}`)
            break
        case 3:
            console.log(`Total: R$ ${(b * 5.00).toFixed(2)}`)
            break
        case 4:
            console.log(`Total: R$ ${(b * 2.00).toFixed(2)}`)
            break
        case 5:
            console.log(`Total: R$ ${(b * 1.50).toFixed(2)}`)
            break
    }
}

res(a,b)