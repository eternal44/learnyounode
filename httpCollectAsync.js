var http = require('http')
var bl = require('bl')
var results = [] 
var count = 0

function httpGet(url, index) {
  http.get(url, function(res) {
    res.pipe(bl(function(err, data){
      if(err)
        return console.log(err)

      results[index] = data.toString()
      count++

      if(count === 3){
        results.forEach(function(result){
          console.log(result)
        })
      }
    }))
  })
}

var urls = process.argv.slice(2)

urls.forEach(function(url, index){
  httpGet(url, index)
})
