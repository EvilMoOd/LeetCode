/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // 动态规划，该题不求连续，所以当出现字符不等的情况时，取目前dp中的最长回文串最大值递推即可
  const dp = Array.from(Array(s.length), () => Array(s.length).fill(0));
  // 对单个字符初始化回文串1
  for (let i = 0; i < s.length; i++) dp[i][i] = 1;
  // 同样从左下遍历到右上
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      // 出现不等时，考虑删除首字符还是删除尾字符
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][s.length - 1];
};
// @lc code=end
