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
  // 回溯，与子集1不同在于，多了去重
  // 去重可以通过对数组进行排序,并比较当前位与前一位是否相同来进行同层去重,比如[1,2,2],第二层会取到两次[1,2]
  const res = [];
  nums.sort((a, b) => a - b);
  const backtrack = (startIndex, path) => {
    res.push(path);
    for (let i = startIndex; i < nums.length; i++) {
      if (i === startIndex || nums[i] !== nums[i - 1]) {
        backtrack(i + 1, path.concat(nums[i]));
      }
    }
  };
  backtrack(0, []);
  return res;
};
// @lc code=end
