Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  const textLength = str.length;
  let truncateStr = "";
  if (textLength > num) {
    for (let i = 0; i < num; i++) {
      truncateStr += str[i]
    }
  } else if (textLength <= num) {
      return str; 
    }
  return truncateStr + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);