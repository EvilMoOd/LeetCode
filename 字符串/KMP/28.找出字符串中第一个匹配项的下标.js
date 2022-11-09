/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // return needle.length === 0 ? 0 : haystack.indexOf(needle);

  // KMP算法入门题，如果出现不匹配的字符，则从已匹配成功的字符串中的前后缀相同的字符串的下一个字符开始匹配
  // 例如abcabd，如果d匹配失败，则从abcab的c开始匹配。因为后缀ab已经和前缀ab匹配过了

  //构建next前缀表
  const next = new Array(needle.length).fill(0);
  for (let i = 1, j = 0; i < needle.length; i++) {
    // j表示已匹配的前缀指针
    while (j > 0 && needle[i] !== needle[j]) j = next[j - 1]; //如果前后缀出现字符不匹配的情况，则缩小前后缀的匹配窗口
    if (needle[i] === needle[j]) j++;
    next[i] = j;
  }
  for (let i = 0, j = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
    if (haystack[i] === needle[j]) j++;
    if (j === needle.length) return i - j + 1; //匹配
  }
  return -1;
};
// @lc code=end