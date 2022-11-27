/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const S = new Map();
  const T = new Map();
  for (let i = 0; i < s.length; i++) {
    if (S.has(s[i]) || T.has(t[i])) {
      if (S.get(s[i]) !== T.get(t[i])) return false;
    }
    S.set(s[i], i);
    T.set(t[i], i);
  }
  return true;
};
// @lc code=end
