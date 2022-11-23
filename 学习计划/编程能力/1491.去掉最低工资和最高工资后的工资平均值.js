/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  // 暴力解决
  const sum = salary.reduce((a, b) => a + b);
  return (
    (sum - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
  );
};
// @lc code=end
