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
  if (!digits.length) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const res = [];
  let arr = new Array(digits.length);
  for (let i = 0; i < digits.length; i++) arr[i] = map[digits[i]];

  const backtrack = (path, index) => {
    if (path.length === arr.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < arr[index].length; i++)
      backtrack(path + arr[index][i], index + 1);
  };
  backtrack('', 0);
  return res;
  // 用map记录手机键盘，将字符串转换成一个数组
  // 然后用回溯对数组各个元素中的字符进行组合即可，本质就是一个组合的入门题型
};
// @lc code=end
