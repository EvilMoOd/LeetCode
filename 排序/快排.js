function quickSort(arr) {
  if (arr.length === 1) return arr;

  let pivot = arr[Math.floor(Math.random() * arr.length)];
  let left = [],
    mid = [],
    right = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] < pivot) left.push(array[i]);
    if (arr[i] === pivot) mid.push(array[i]);
    if (arr[i] > pivot) right.push(array[i]);
  }

  return quickSort(left).concat(mid, quickSort(right));
}
