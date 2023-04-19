const numbers = [-1, -3, -5, -4]
function lowestNum(arg) {
    let lowestNumber = arg[0];
    for (let item of arg) {
        if (item < lowestNumber) {
            lowestNumber = item;
        }
    }
    return lowestNumber;
}
lowestNum(numbers)

const numbers = [1, 3, 5, 4]
function largestNum(arg) {
    let largestNumber = arg[0];
    for (let item of arg) {
        if (item > largestNumber) {
            largestNumber = item;
        }
    }
    return largestNumber;
}
largestNum(numbers)