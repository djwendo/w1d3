var str = "lighthouse in the house";


function countLetters(str) {
  var arr = str.split("");
  var result = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      result[arr[i]] = [];
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result[arr[i]].push(j);
        }
      }
    }
  }
return result;
}

console.log(countLetters(str));
