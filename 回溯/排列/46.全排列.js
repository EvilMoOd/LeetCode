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
  const res = [];
  const backtrack = (path, arr) => {
    if (path.length === nums.length) res.push(path);
    for (let i = 0; i < arr.length; i++)
      backtrack(path.concat(arr[i]), arr.slice(0, i).concat(arr.slice(i + 1)));
  };
  backtrack([], nums);
  return res;
  // 回溯排序入门，与剑38思路相同，区别在于该题是数组
};
// @lc code=end
