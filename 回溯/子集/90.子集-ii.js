/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const backtrack = (path, startIndex) => {
    res.push(path);
    for (let i = startIndex; i < nums.length; i++) {
      if (i !== startIndex && nums[i] === nums[i - 1]) continue;
      backtrack(path.concat(nums[i]), i + 1);
    }
  };
  backtrack([], 0);
  return res;
  // 回溯入门，把每种结果添加到结果数组中且去重，去重采用排序，然后判断前一个元素是否在同层树用过
  // Tips:这题想过不用排序单纯用set思路是否可行，结果是不可行，因为该题并不是找排列，而是找组合，所以实际上会出现顺序不同的重复情况
};
// @lc code=end
