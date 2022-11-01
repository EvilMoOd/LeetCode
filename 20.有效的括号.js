/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && map[s[i]] === stack[stack.length - 1]) stack.pop();
    else stack.push(s[i]);
  }
  return !stack.length;
  // 栈入门题，可以用表或者对象来匹配括号，记得比较的时候是比较栈顶元素，而且要确保栈中有元素
};
// @lc code=end