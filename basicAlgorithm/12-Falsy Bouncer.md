Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let falsyitems = [];
  let trulyitems = [];
  for (let item of arr) {
    if (item) {
      trulyitems.push(item);
    } else if (isNaN(item)){
      falsyitems.push(item);
    }
  }
  return trulyitems;
}

bouncer([7, "ate", "", false, 9]);