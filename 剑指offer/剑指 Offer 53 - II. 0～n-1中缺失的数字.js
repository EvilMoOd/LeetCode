/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 二分法
  let left = 0,
    right = nums.length - 1;
  let mid = left + ((right - left) >> 1);
  while (left <= right) {
    mid === nums[mid] ? (left = mid + 1) : (right = mid - 1);
    mid = left + ((right - left) >> 1);
  }
  return left;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== i) return i;
  // }
  // return nums.length;
};
