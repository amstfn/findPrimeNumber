Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let result = str;
  if (num <= 0) {
    return result = "";
  } else {
    for (let i = 0; i < num - 1 ; i++) {
    result += str
  } 

  }
  return result;
}

repeatStringNumTimes("abc", 4);