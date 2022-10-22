/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid === nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
  // 逐渐缩小范围，题目要求是在不相等的位置，故最后left会刚好停在不等的位置上
};
