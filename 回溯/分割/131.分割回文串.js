/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const backtrack = (path, startIndex) => {
    if (startIndex === s.length) {
      res.push(path);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1);
      if (str.split('').reverse().join('') !== str) continue;
      else backtrack(path.concat(str), i + 1);
    }
  };
  backtrack([], 0);
  return res;
  // 分割同时判断每段的回文特性
};
// @lc code=end
