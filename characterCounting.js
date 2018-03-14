// Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

// Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

// However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

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
