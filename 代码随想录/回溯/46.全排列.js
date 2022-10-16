/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 回溯排列问题，这题要记录路径的最终值，即叶子节点，我们需要知道哪些元素已经使用过了，所以递归时要一边记录路径一边记录使用过的值
  const res = [];
  const backtrack = (path, use) => {
    if (path.length === nums.length) res.push(path);
    for (let i = 0; i < nums.length; i++) {
      if (!use.includes(i)) backtrack(path.concat(nums[i]), use.concat(i));
    }
  };
  backtrack([], []);
  return res;
};
// @lc code=end
