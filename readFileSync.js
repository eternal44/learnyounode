var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString().split('');
var count = 0;

file.forEach(function(char){
  if(char === '\n') count++;
})

console.log(count);

