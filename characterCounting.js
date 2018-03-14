var str = "lighthouse in the house";


function countLetters(str) {
  var arr = str.split("");
  var result = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      result[''+arr[i]] = 0;
    for (var j = 0; j < arr.length; j++) {
      if (''+arr[i] === ''+arr[j]) {
        result[''+arr[j]] = result[''+arr[j]] + 1;
        }
      }
    }
  }
return result;
}

console.log(countLetters(str));
