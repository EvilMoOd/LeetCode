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
  // 回溯,取递增的子集,这里的递增子集元素必须大于2且大于的是path中的最后一个元素
  // 去重方法则是将已使用过的同层元素添加到use数组中进行判断是否用过
  const res = [];
  const backtrack = (startIndex, path) => {
    if (path.length > 1) res.push(path);
    let use = [];
    for (let i = startIndex; i < nums.length; i++) {
      if (
        !use[nums[i]] &&
        (path.length === 0 || nums[i] >= path[path.length - 1])
      ) {
        use[nums[i]] = true;
        backtrack(i + 1, path.concat(nums[i]));
      }
    }
  };
  backtrack(0, []);
  return res;
};
// @lc code=end
