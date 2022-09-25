/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 回溯
  if (!digits) return []
  let res = []
  // 列出键盘映射
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  // 保存路径，通过当前回溯的深度判断遍历字符串位
  let backtrack = (path, deep) => {
    if (path.length === digits.length) {
      res.push(path)
      return
    }
    for (let i of map[digits[deep]]) {
      backtrack(path + i, deep + 1)
    }
  }
  backtrack('', 0)
  return res
};
// @lc code=end

