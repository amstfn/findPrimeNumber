function primeCheck(n) {
    if (n == 1) {
        return false;
    } else if (n ==2) {
        return true;
    } else {
    for (let i = 2; i <= n-1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
    }
}
let counter = 0;
function primeCounter(a, b) {
    let result = [];
    let notPrime = [];
    for (let i = a; i <= b; i++) {
        if (primeCheck(i)) {
            result.push(i);
            counter += 1;
        } else {
            notPrime.push(i);
        }
    }
    return result;
}
console.log(counter)
primeCounter(1, 100);
