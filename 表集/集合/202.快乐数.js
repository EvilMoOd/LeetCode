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
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = sum(n);
    if (n === 1) return true;
    else if (set.has(n)) return false;
  }
  function sum(n) {
    let s = 0;
    while (n) {
      s += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    return s;
  }
  // 这道题关键就在于这是一个循环，会在一个环中不停得到一组重复的数字，所以可以用表集或者快慢指针去重
};
// @lc code=end
