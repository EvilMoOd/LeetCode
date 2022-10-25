/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => `${a}${b}` - `${b}${a}`);
  // API排序秒杀
};
