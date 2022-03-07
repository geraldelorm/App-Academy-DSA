function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minNumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minNumIndex] > arr[j]) {
        minNumIndex = j;
      }
    }
    swap(arr, i, minNumIndex);
  }
  return arr;
}

// Time complexity == 0(n^2)
// Space Complexity == O(1)

module.exports = {
  selectionSort,
  swap,
};
