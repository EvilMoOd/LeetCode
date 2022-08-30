/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 移动窗口，边遍历边记录最大值，遇到重复字符时从重复的元素开始继续往下遍历，具体可以不断shift直至未重复
  let arr = [],
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) === -1) {
      arr.push(s[i]);
    } else {
      arr.shift();
      i--;
    }
    max = Math.max(max, arr.length);
  }
  return max;
};
