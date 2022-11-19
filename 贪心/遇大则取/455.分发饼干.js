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
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < g.length; i++) if (g[i] <= s[res]) res++;
  return res;
  // 贪心思想，排序然后优先用大的饼干满足胃口大的孩子
};
// @lc code=end
