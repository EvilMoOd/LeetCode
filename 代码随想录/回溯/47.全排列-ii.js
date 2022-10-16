/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 与子集II类似，需要对nums排列做去重处理
  const res = [];
  nums.sort((a, b) => a - b);
  const backtrack = (path, use) => {
    if (path.length === nums.length) {
      res.push(path);
    }
    for (let i = 0; i < nums.length; i++) {
      // 去重时注意要排除掉还没用过的，若是出现重复就进行去重则会导致无结果
      if (i > 0 && nums[i] === nums[i - 1] && !use.includes(i - 1)) continue; // used[i]表示当前元素已经在路径中，跳过；第二段用来剪枝，当前数组和前一位相同并且前一位没有被用过
      if (!use.includes(i)) backtrack(path.concat(nums[i]), use.concat(i));
    }
  };
  backtrack([], []);
  return res;
};
// @lc code=end
