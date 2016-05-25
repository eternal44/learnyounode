var filterFiles = require('./filterLS')
var directoryName = process.argv[2];
var extension = process.argv[3];

filterFiles(directoryName, extension, function(err, searchResults){
  if(err)
    console.error('Error:', err.message);
  searchResults.forEach(function(file){
    console.log(file);
  })
})
