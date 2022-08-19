function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i],
      minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
  }
  return arr;
}
const data = chooseSort([5124, 123, 1, 23, 676, 12, 32, 44, 3, 123]);
console.log(data, '🚀DEBUG变量>>>data<<<在归并的第17行🚀');
