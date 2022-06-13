/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //遍历数组，若重复则去掉第一个元素，再继续比较，最后留下最长的一串
  let max = 0,
    arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) == -1) {
      arr.push(s[i]);
    } else {
      arr.shift();
      i--;
      continue;
    }
    max = Math.max(max, arr.length);
  }
  return max;
};
// @lc code=end
