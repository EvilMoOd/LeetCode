/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /* 动态规划，或者用双指针中心扩散法解题
  首先肯定是要两层循环遍历出所有可能的回文串，然后用二维dp数组记录每一种回文串（以i为起点，j为终点）是否为回文串
  字符相等情况下j-i如果长度小于3，则说明肯定是回文串，如果大于等于3，则需要判断i+1，j-1这个是否是回文串，这里可以跳过dp数组递推得到 */
  const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
  let res = 0;
  // 注意这里的遍历顺序是从下到上，左到右，因为需要知道i+1和j-1的dp
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i < 2) {
          res++;
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1]) {
          res++;
          dp[i][j] = true;
        }
      }
    }
  }
  // 双指针中心扩散法，与暴力和动规不同，中心扩散法只需要选择一个和两个字符作为基准进行中心扩散，一次遍历+一次中心扩散判断即可，空间复杂度为1
  /* for (let i = 0; i < 2 * s.length - 1; i++) {
    // 这里起点左右指针需要取单和双两种起点，
    let left = Math.floor(i / 2);
    let right = left + (i % 2);

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }
  return res; */
};
// @lc code=end
