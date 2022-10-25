/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // let str = parseInt(s.trim());
  // if (isNaN(str)) return 0;
  // if (str <= -2147483648) return -2147483648;
  // if (str >= 2147483647) return 2147483647;
  // return str;
  // 不用API
  const num = str.trim().match(/^[+-]?\d+/);
  
  if (!num) return 0;
  const min = -(2 ** 31),
    max = 2 ** 31 - 1;
  return num <= min ? min : num >= max ? max : num;
  // 去空格&&正则匹配整数字符串，按条件返回
};
// @lc code=end
