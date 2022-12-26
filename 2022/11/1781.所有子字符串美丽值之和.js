/*
 * @lc app=leetcode.cn id=1781 lang=javascript
 *
 * [1781] 所有子字符串美丽值之和
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    const cnt = new Map();
    for (let j = i; j < s.length; ++j) {
      cnt.set(s[j], (cnt.get(s[j]) || 0) + 1);
      const t = Array.from(cnt.values());
      ans += Math.max(...t) - Math.min(...t);
    }
  }
  return ans;
};
// @lc code=end
