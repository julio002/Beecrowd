var input = require("fs").readFileSync("stdin.txt","utf8")
var lines = input.split("\n");

var array = [lines[0], lines[1], lines[2], lines[3], lines[4]]
array = array.map(x=>parseInt(x))

var par = 0

for (var num of array){
    var div = (parseInt(num/2))
    if(div % 2 == 0){
        par++
    }
}

console.log(`${par} valores pares`)