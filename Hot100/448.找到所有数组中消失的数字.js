/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 用集合收集元素，然后判断该元素是否在集合中
  const res = [];
  const set = new Set(nums);
  for (let i = 1; i <= nums.length; i++) if (!set.has(i)) res.push(i);
  return res;
};
// @lc code=end
