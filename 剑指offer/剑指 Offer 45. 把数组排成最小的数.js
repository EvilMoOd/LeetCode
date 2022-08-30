/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => (`${a}${b}` - `${b}${a}` > 0 ? 1 : -1)).join('');
};
