var nums = process.argv.slice(2);

var result = nums.reduce(function(memo, item){
  return memo += +item;
}, 0)

console.log(result);

