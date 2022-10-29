/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const set = new Set();
  for (const i of nums) {
    if (set.has(i)) return i;
    else set.add(i, 1);
  }
  // 数组查重，set秒杀
};
