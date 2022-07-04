var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var array = lines.map( x => parseInt(x))

var a = 0
var b = 0

for ( i = 1; i <= array[0]; i++ ) {
    if ( array[1] >= 10 && array[i] <= 20 ) {
        a++
    }   else {
        b++
    }
}

console.log(`${a} in`)
console.log(`${b} out`)