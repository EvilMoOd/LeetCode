/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let cur = 0;
  for (const i of t) if (s[cur] === i) cur++;
  return cur === s.length;
  // 双指针秒杀
};
// @lc code=end
