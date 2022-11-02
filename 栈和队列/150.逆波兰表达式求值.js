/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const computed = (a, b, com) => {
    switch (com) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b); //要取整
    }
  };
  for (const i of tokens) {
    if (isNaN(+i)) {
      // 这里顺序i别搞错
      b = stack.pop();
      a = stack.pop();
      stack.push(computed(a, b, i));
    } else {
      stack.push(+i);
    }
  }
  return stack[0];
  // 同样是栈的思想做题，不过这题有点细节注意
  // 首先是栈的弹出顺序和运算顺序相反，然后是除法结果，如果正数向下取整，负数则向上取整
};
// @lc code=end