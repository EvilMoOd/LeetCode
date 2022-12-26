/*
 * @lc app=leetcode.cn id=1769 lang=javascript
 *
 * [1769] 移动所有球到每个盒子所需的最小操作数
 */

// @lc code=start
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  
  const res = Array(boxes.length);
  for (let i = 0; i < res.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === '1') sum += Math.abs(j - i);
    }
    res[i] = sum;
  }
  return res;
};
// @lc code=end
