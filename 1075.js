var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var array = lines.map( x => parseInt(x))

for ( i = 1; i <= 10000; i++ ) {
    if( i % array == 2 ) {
        console.log(i)
    }
}
