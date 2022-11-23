/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 不会。
  let map = { undefined: -1 }; // 如果是空，字典序在其他字母前。处理['abc', 'abcd']的情况
  for (let i = 0; i < order.length; i++)
    // 生成对应map
    map[order[i]] = i;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let index1 = map[words[i][j]];
      let index2 = map[words[i + 1][j]];
      if (index1 < index2) {
        // 前者小于后者，说明这两个字母顺序是正确的，跳过
        break;
      } else if (index1 > index2) {
        // 前者大于后者，不符合字典序
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
