/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let n1 = nums[i];
    if (nums[i] > 0) break;
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let n2 = nums[left],
        n3 = nums[right];
      if (n1 + n2 + n3 == 0) {
        arr.push([n1, n2, n3]);
        while (left < right && nums[left] == n2) left++;
        while (left < right && nums[right] == n3) right--;
      } else if (n1 + n2 + n3 < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return arr;
};
// @lc code=end
