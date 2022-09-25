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
  const res = []
  const backtrack = (path, left) => {
    // 字符遍历完跳出递归并加入res中
    if (left === s.length) {
      res.push(path)
      return
    }
    // 滑动窗口判断字符片段是否是回文，如果是则切割，另一边进入回溯
    for (let right = left; right < s.length; right++) {
      if (isPali(s, left, right)) {
        backtrack(path.concat(s.substring(left, right + 1)), right + 1)
      }
    }
  }
  backtrack([], 0)
  return res
};

function isPali(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r])
      return false
    l++
    r--
  }
  return true
};
// @lc code=end

