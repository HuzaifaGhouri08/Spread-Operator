let array = [1, 2, 2, 3, 3, 3, 3, 4];

function removeDuplicateValues() {
  return [...new Set(array)];
}

console.log(removeDuplicateValues());
