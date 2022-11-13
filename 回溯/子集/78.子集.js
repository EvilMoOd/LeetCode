/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const backtrack = (path, startIndex) => {
    res.push(path);
    for (let i = startIndex; i < nums.length; i++)
      backtrack(path.concat(nums[i]), i + 1);
  };
  backtrack([], 0);
  return res;
  // 回溯入门题，把每个回溯结果添加到结果数组中
};
// @lc code=end
