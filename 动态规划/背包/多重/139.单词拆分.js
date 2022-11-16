/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (
        wordDict[j] === s.slice(i - wordDict[j].length, i) &&
        dp[i - wordDict[j].length]
      )
        dp[i] = true;
    }
  }
  return dp[s.length];
};
// @lc code=end
