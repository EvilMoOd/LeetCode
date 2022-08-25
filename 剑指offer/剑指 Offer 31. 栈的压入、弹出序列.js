/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [],
    k = 0;
  for (let value of pushed) {
    stack.push(value);
    while (stack.length && stack[stack.length - 1] === popped[k]) {
      stack.pop();
      k++;
    }
  }
  return stack.length === 0;
};
