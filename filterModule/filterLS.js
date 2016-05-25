var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, cb){
  var result;

  fs.readdir(directory, function(err, filesArr){
    if(err){
      return cb(err);
    }
    result = filesArr.filter(function(file){
      return path.extname(file) === '.' + extension;
    })
    cb(null, result);
  })
}
