function quickSort(arr) {
  if (arr.length === 1) return arr;
  // 取轴
  let pivot = arr[0];
  // 分治
  let left = [],
    mid = [],
    right = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] < pivot) left.push(array[i]);
    if (arr[i] === pivot) mid.push(array[i]);
    if (arr[i] > pivot) right.push(array[i]);
  }
  // 递归
  return quickSort(left).concat(mid, quickSort(right));
}
