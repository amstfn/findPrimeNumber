function reverseArray (array) {//this function reverse current array in to new array
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr) {//this one reverse array in place
    const holderArr = [...arr];
    let counter = 1;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        arr[i] = arr[arr.length - counter];
        arr[arr.length - counter] = holderArr[i];
        counter += 1;
    }
    return arr;
}