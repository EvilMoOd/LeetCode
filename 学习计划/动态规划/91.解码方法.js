/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // 动态规划，判断条件略显复杂，需要判断
  // 1、0开头直接0种返回，且当前位置是0的情况下前面必须找到1或2凑
  // 2、如果与前一位能凑10~26则进行dp累加
  // 3、如果非上述情况说明能单独成字母，则直接平移即可
  if (!s.length || s[0] === '0') return 0;
  const dp = new Array(s.length + 1);
  dp[0] = 1;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '0') {
      if (s[i - 1] !== '1' && s[i - 1] !== '2') return 0;
      dp[i + 1] = dp[i - 1];
    } else if (s[i - 1] + s[i] >= 10 && s[i - 1] + s[i] <= 26) {
      dp[i + 1] = dp[i - 1] + dp[i];
    } else {
      dp[i + 1] = dp[i];
    }
  }
  return dp[s.length];
};
// @lc code=end
