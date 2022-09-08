/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 模拟
  nums.sort((a, b) => a - b);
  let zero = [];
  let len = nums.length - 2;
  for (let i = 0; i < len + 1; i++) {
    if (nums[i] === 0) {
      zero.push(0);
      nums.shift();
      i--;
    } else {
      if (nums[i] !== nums[i + 1] - 1) {
        if (zero.length) {
          zero.pop();
          nums.splice(i + 1, 0, nums[i] + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
