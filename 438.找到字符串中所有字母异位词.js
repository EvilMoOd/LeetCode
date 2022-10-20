/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = []; // 返回值
  // 记录p中的字母及个数
  const map = new Map(); // 存储 p 的字符
  for (let item of p) {
    map.set(item, map.get(item) ? map.get(item) + 1 : 1);
  }
  // 存储窗口里的字符情况
  const window = new Map();
  let valid = 0; // 有效字符个数

  for (let i = 0; i < s.length; i++) {
    const right = s[i];
    // 向右扩展
    window.set(right, window.get(right) ? window.get(right) + 1 : 1);
    // 扩展的节点值是否满足有效字符
    if (window.get(right) === map.get(right)) {
      valid++;
    }
    if (i >= p.length) {
      // 移动窗口 -- 超出之后，收缩回来， 这是 pLen 长度的固定窗口
      const left = s[i - p.length];
      // 原本是匹配的，现在移出去了，肯定就不匹配了
      if (window.get(left) === map.get(left)) valid--;
      window.set(left, window.get(left) - 1);
    }
    // 如果有效字符数量和存储 p 的map 的数量一致，则当前窗口的首字符保存起来
    if (valid === map.size) res.push(i - p.length + 1);
  }
  return res;
};
// @lc code=end
