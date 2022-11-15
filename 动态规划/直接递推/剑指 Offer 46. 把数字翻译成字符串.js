/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let str = num.toString();
  let dp = [1, 1];
  for (let i = 2; i <= str.length; i++) {
    str[i - 2] + str[i - 1] >= 10 && str[i - 2] + str[i - 1] <= 25
      ? (dp[i] = dp[i - 1] + dp[i - 2])
      : (dp[i] = dp[i - 1]);
  }
  return dp[str.length];
  // 动规，本质上就是爬楼梯问题，不同在于如果拼凑的数字如果不在字母范围内的话，则只能跳1个台阶，也就是只有一种跳法
};
