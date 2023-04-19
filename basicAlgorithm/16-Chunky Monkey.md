Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num))
        console.log(result)
    }
    return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
