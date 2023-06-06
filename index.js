const array1 = [1, 4, 7, 10, 13, 16];
const array2 = [2, 5, 8, 11, 14, 17];
const array3 = [3, 6, 9, 12, 15, 18]


function findMaximumNumber() {
return Math.max(...array1, ...array2 ,...array3)
}

console.log(findMaximumNumber())
