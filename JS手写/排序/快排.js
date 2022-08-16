function quickSort(arr) {
  if (arr.length < 2) {
    return arr.slice();
  }
  let pivot = arr[Math.floor(Math.random() * arr.length)];
  let left = [];
  let middle = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] === pivot) {
      middle.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(middle, quickSort(right));
}
