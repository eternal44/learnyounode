var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function(err, data){
  var count = 0;
  data = data.split('');

  if(!err){
    data.forEach(function(char){
      if(char === '\n') count++;
    })
    console.log(count);
  }
});
