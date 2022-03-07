function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let element1 = array1.length ? array1[0] : Infinity;
    let element2 = array2.length ? array2[0] : Infinity;

    let next;
    if (element1 < element2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }
    merged.push(next);
  }
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIndex);
  let rightHalf = array.slice(midIndex);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  let sorted = merge(sortedLeft, sortedRight);

  return sorted;
}

module.exports = {
  merge,
  mergeSort,
};

console.log(mergeSort([1, 5, 7, 0, 4, 8]));

// Complexity of O(nlogn)
// Space complexity O(n)