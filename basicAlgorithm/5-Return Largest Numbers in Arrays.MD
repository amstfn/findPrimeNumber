Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestNum(arr) {
  let largNumber = 0;
  if (arr[0] < 0 && arr[1] < 0 && arr[2] < 0 && arr[3] < 0) {
    largNumber = Math.max(...arr);
  } else {
    for (let i of arr) {
      if (i > largNumber) {
        largNumber = i;
      }
    }
  }
  return largNumber;
}
function largestOfFour(arr) {
  let largestgroups = [];
  for (let j of arr) {
    largestgroups.push(largestNum(j))
  }
  return largestgroups;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);