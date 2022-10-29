/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;//这里要加上j！==i+1的条件，否则会跳过([2,2,2,2,2]，8)的情况
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return res;
  // 和三数之和思路一样，这一次是固定两个点移动两个指针，特别注意不要跳过j===i+1时的情况
};
// @lc code=end
