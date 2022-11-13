/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [];
  const backtrack = (path, startIndex) => {
    if (path.length >= 2) res.push(path);
    let set = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (
        !set.has(nums[i]) &&
        (path.length === 0 || nums[i] >= path[path.length - 1])
      ) {
        set.add(nums[i]);
        backtrack(path.concat(nums[i]), i + 1);
      }
    }
  };
  backtrack([], 0);
  return res;
  // 该题需要找递增序列，所以不可以使用排序找子集类似的思路去重，只能使用set
};
// @lc code=end
