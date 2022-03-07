function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let item = 0; item < array.length - 1; item++) {
      if (array[item] > array[item + 1]) {
        swap(array, item, item + 1);
        sorted = false;
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort,
  swap,
};
