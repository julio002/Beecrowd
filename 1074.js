var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var array = lines.map( x => parseInt(x))

for ( i = 1; i <= array[0]; i++ ) {
    if ( array[i] % 2 != 0 && array[i] < 0 ) {
            console.log("ODD NEGATIVE")
    }   else if ( array[i] == 0 ) {
            console.log("NULL")
    }   else if ( array[i] % 2 != 0 && array[i] > 0) {
            console.log("ODD POSITIVE")
    }   else if ( array[i] % 2 == 0 && array[i] < 0 ) {
            console.log("EVEN NEGATIVE")
    }   else if (array[i] % 2 == 0 && array[i] > 0 ) {
            console.log("EVEN POSITIVE")
    }
}