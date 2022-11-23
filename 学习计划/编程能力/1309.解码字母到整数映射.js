/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  // 建表查表题
  const map = new Map();
  for (let i = 1; i < 27; i++) {
    map.set(i > 9 ? `${i}#` : `${i}`, String.fromCharCode(96 + i));
  }
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i + 2) === '#') {
      result.push(map.get(s.slice(i, i + 3)));
      i += 2;
    } else result.push(map.get(s.charAt(i)));
  }

  return result.join('');
};
// @lc code=end
