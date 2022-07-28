/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (s.length && g.length) {
    const cake = s.pop();
    for (let i = g.length - 1; i >= 0; i--) {
      if (g[i] <= cake) {
        g.splice(i, 1);
        count++;
        break;
      }
    }
  }
  return count;
};
// @lc code=end
