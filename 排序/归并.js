function mergeSort(arr) {
  // 递归分组
  if (arr.length === 1) return arr;
  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // 分治
  let res = [];
  while (left.length && right.length) {
    left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift());
  }
  res.push(...left, ...right);
  return res;
}
