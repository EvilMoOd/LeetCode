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
  //用队列处理s，用栈接收比较并且消消乐
  // const stack = []
  // s = s.split("");
  // while (s.length) {
  //     let cur = s.shift()
  //     let pre = stack.pop()
  //     if (!pre) {
  //         stack.push(cur)
  //     } else if (pre == '(' && cur == ')' || pre == '[' && cur == ']' || pre == '{' && cur == '}') {
  //         continue
  //     } else {
  //         stack.push(pre, cur)
  //     }
  // }
  // return stack.length == 0 ? true : false

  //用表解决更为优雅
  const stack = [],
    map = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};
// @lc code=end
