function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const data = bubbleSort([5124, 123, 1, 23, 676, 12, 32, 44, 3, 123]);
console.log(data, '🚀DEBUG变量>>>data<<<在归并的第17行🚀');
