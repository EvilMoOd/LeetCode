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
