var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var array = [lines[0], lines[1], lines[2], lines[3], lines[4]]
array = array.map(x=>parseInt(x))

var par = impar = pos = neg = 0

var i = 1

for (var num of array){
    if( num % 2 == 0 ) {
        par++
    }   else {
        impar++
    }
    if( num < 0 ) {
        neg++
    }   else if ( num > 0) {
        pos++
    }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`)
console.log(`${neg} valor(es) negativo(s)`)