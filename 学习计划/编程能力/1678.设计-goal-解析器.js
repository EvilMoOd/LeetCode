/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  const newStr = command.replaceAll('()', 'o');
  return newStr.replaceAll('(al)', 'al');
};
// @lc code=end

