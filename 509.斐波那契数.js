/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**]
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    //递归
    return n === 0 ? 0 : n < 3 ? 1 : fib(n - 1) + fib(n - 2)
};
// @lc code=end

