function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

module.exports = {
  quickSort,
};

// Time Complexity = worse case O(n^2)
// Time Complexity = avg case O(nlog(n))
// Space complexity = O(n)