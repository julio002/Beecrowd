var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var a = parseInt(lines[0]);


for ( i = 1 ; i <= a ; i++) {
    if (i % 2 === 0) {
        console.log(i + '^2 = ' + (i*i))
    }
}