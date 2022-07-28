/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = new Map();
  for (const i of nums) {
    if (map.has(i)) {
      return i;
    } else {
      map.set(i, i);
    }
  }
};
const data = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
console.log(data, '🚀DEBUG变量>>>data<<<在3.数组中重复的数字的第16行🚀');
