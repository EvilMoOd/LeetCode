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
  const res = [];
  const backtrack = (path, arr) => {
    let set = new Set();
    if (path.length === nums.length) res.push(path);
    for (let i = 0; i < arr.length; i++)
      if (!set.has(arr[i])) {
        backtrack(
          path.concat(arr[i]),
          arr.slice(0, i).concat(arr.slice(i + 1))
        );
        set.add(arr[i]);
      }
  };
  backtrack([], nums);
  return res;
  // 回溯排序入门，set去重即可
};
// @lc code=end
