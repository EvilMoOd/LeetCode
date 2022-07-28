/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //表也行，集合也行
  let set = new Set()
  let sum
  while (sum != 1) {
    let arr = ('' + (sum || n)).split("")
    sum = arr.reduce((total, current) => {
      return total + current ** 2
    }, 0);
    if(set.has(sum)){
      return  false
    }
    set.add(sum)
  }
  return true
};
// @lc code=end

