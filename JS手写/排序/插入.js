function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1,
      current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
const data = insertSort([5124, 123, 1, 23, 676, 12, 32, 44, 3, 123]);
console.log(data, '🚀DEBUG变量>>>data<<<在归并的第17行🚀');
