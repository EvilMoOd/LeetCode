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
  // 回溯，问题可以抽象成一棵树，那么我们用回溯枚举所有可能出现的情况，并在每一个节点记录当前路径，路径即为每一个子集
  const res = [];
  const backtrack = (startIndex, path) => {
    res.push(path);
    for (let i = startIndex; i < nums.length; i++) {
      backtrack(i + 1, path.concat(nums[i]));
    }
  };
  backtrack(0, []);
  return res;
};
// @lc code=end
