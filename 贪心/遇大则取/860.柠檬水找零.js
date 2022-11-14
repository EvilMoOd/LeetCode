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
  let five = 0,
    ten = 0;
  for (const i of bills) {
    if (i === 5) five++;
    else if (i === 10) {
      five--;
      ten++;
    } else if (i === 20) {
      if (ten) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
    }
    if (five < 0 || ten < 0) return false;
  }
  return true;
  // 这道题怎么说呢。。。无形中扯到贪心，
  // 正常用程序模拟一遍找零，贪心主要在收到20块时优先找10块+5块，如果没有10块再找3张5块，因为5块还能找10块
};
// @lc code=end
