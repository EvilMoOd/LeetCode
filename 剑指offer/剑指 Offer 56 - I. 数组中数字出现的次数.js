/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  const sum = nums.reduce((a, b) => a ^ b, 0);
  const lowBit = sum & -sum;
  const { length } = nums;
  const result = [0, 0];
  for (let i = 0; i < length; ++i) {
    if (nums[i] & lowBit) {
      result[0] ^= nums[i];
    } else {
      result[1] ^= nums[i];
    }
  }
  return result;
};
console.log(singleNumbers([6, 5, 5, 9, 10, 9, 4, 10]));
