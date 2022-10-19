/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  /* // 动态规划，字符相同时，不删除，字符串不同时。可以选择删除字符串1或2或两个都删，取dp中的删除最小值
  const dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1));
  // 这里假设与另一个无字符比较，那么需要将字符串全删除，进行初始化
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= word2.length; j++) dp[0][j] = j;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 2
        );
    }
  }
  return dp[word1.length][word2.length]; */
  // 参考1143，本题也可以理解为求最长公共子序列，那么字符串总长度-最长子序列长度=要删除的个数
  const dp = Array.from(Array(word1.length + 1), () =>
    Array(word2.length + 1).fill(0)
  );
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return word1.length + word2.length - dp[word1.length][word2.length] * 2;
};
// @lc code=end
