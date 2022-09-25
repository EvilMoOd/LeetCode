/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // emmmm，暴力模拟解题就行了，20块找钱涉及贪心优先找10块+5块
  let five = 0, ten = 0
  for (const i of bills) {
    if (i === 5) five++
    if (i === 10) {
      if (five) {
        five--
        ten++
      } else {
        return false
      }
    }
    if (i === 20) {
      if (five && ten) {
        five--
        ten--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

