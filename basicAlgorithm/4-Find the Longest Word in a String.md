Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

function textBreaker(userText) {// this function break a text to words in array
   return userText.match(/\w+/ig)
}

function findLongestWordLength(str) {
  let longestWord = ""
  for (let word of textBreaker(str)) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");