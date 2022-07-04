var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var a = parseInt(lines[0]);

var impar = 0

while ( impar < 10000 ) {
    if (a % 2 != 0) {
        console.log(a)
        impar++
    }
    a++
}