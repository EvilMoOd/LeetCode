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
  // 动态规划完全背包
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  // 先遍历背包再遍历物品
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      // 当前字符串长度大于数组内字符串长度才进行dp
      if (i >= wordDict[j].length) {
        // 当当前字符串与字符串数组匹配且匹配后，前一项也匹配，则当前dp下标设为true
        if (
          s.slice(i - wordDict[j].length, i) === wordDict[j] &&
          dp[i - wordDict[j].length]
        ) {
          dp[i] = true;
        }
      }
    }
  }

  return dp[s.length];
};
// @lc code=end
