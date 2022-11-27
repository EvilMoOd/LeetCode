/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // map解，这题要用字符组回文串，所以字符偶数次出现则可以作为回文串的一部分，如果是奇数，那么-1成偶也可以组，最后返回结果+1
  let res = 0;
  let add = false; //s存在奇数
  const map = new Map();
  for (const i of s) map.set(i, map.has(i) ? map.get(i) + 1 : 1);
  for (const i of map.values()) {
    if (i % 2 === 0) res += i;
    else {
      res += i - 1;
      add = true;
    }
  }
  return add ? res + 1 : res;
};
// @lc code=end
