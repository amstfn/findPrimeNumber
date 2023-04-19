Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let wordHolder = [];
  const counter = str.length - target.length;
  for (let i = str.length -1; i >= counter; i--) {
    wordHolder.unshift(str[i])
  }
  let result = [];
  for (let j = target.length - 1; j >= 0; j--) {
    if (target[j] == wordHolder[j]) {
      result.push(target[j]);
    } else {
      return false;
    }
  }
  if (result) {
        return true;
    }
}
confirmEnding("Connor", "or");