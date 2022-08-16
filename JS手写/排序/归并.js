function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  let res = [];
  while (left.length && right.length) {
    left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift());
  }
  res.push(...left, ...right);
  return res;
}
const data = mergeSort([5124, 123, 1, 23, 676, 12, 32, 44, 3, 123]);
console.log(data, '🚀DEBUG变量>>>data<<<在归并的第17行🚀');
