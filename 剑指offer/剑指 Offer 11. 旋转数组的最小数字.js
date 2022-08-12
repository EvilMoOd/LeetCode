/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  return Math.min(...numbers);
  // 二分法
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let middle = left + ~~((right - left) / 2);
    if (numbers[middle] > numbers[right]) left = middle + 1;
    else if (numbers[middle] < numbers[right]) right = middle;
    else right--;
  }
  return numbers[left];
};
