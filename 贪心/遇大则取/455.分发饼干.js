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
  let res = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let left = 0,
    right = 0;
  while (right !== s.length) {
    if (g[left] <= s[right]) {
      res++;
      left++;
      right++;
    } else right++;
  }
  return res;
  // 贪心思想，排序双指针，小的饼干给胃口小的人，所以优先排序，然后两根指针遍历数组，统计能喂饱的孩子
};
// @lc code=end
