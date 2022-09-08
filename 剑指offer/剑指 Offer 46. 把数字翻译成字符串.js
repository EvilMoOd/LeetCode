/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  // 动态规划，当两个字符组合成一个10-25数字时，count+1，后面的情况包含了前面的组合情况，所以用动规
  let str = num.toString();
  let len = str.length;
  let dp = new Array(len + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < len + 1; i++) {
    str[i - 2] + str[i - 1] >= 10 && str[i - 2] + str[i - 1] <= 25
      ? (dp[i] = dp[i - 1] + dp[i - 2])
      : (dp[i] = dp[i - 1]);
  }
  return dp[len];
};
