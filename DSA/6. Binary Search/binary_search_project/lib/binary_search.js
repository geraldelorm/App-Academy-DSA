function binarySearch(array, target) {
  if (array.length <= 0) return false;

  middleIndex = Math.floor(array.length / 2);
  leftHalf = array.slice(0, middleIndex);
  rightHalf = array.slice(middleIndex + 1);

  if (array[middleIndex] > target) {
    return binarySearch(leftHalf, target);
  } else if (array[middleIndex] < target) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

function binarySearchIndex(array, target, lowPoint = 0, highPoint = array.length - 1) {
  // return array.indexOf(target) could solve this
  if (lowPoint === highPoint) return -1;

  let middleIndex = Math.floor((lowPoint + highPoint) / 2);

  if (array[middleIndex] > target) {
    return binarySearchIndex(array, target, lowPoint, middleIndex);
  } else if (array[middleIndex] < target) {
    return binarySearchIndex(array, target, middleIndex + 1, highPoint);
  } else {
    return middleIndex;
  }
}
console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));

module.exports = {
  binarySearch,
  binarySearchIndex,
};
