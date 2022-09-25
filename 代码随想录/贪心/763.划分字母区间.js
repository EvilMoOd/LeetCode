/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // 贪心，第一次遍历记录每个字符的最后出现位置index，第二次遍历不断更新当前遍历字符的最远位置end，当end=i时分割记录当前i+1
  let res = [],
    start = -1,
    end = 0;
  const map = new Map();
  for (let i in s) {
    map.set(s[i], i);
  }
  for (const i in s) {
    end = Math.max(map.get(s[i]), end);
    if (+i === end) {
      res.push(+i - start);
      start = +i;
    }
  }
  return res;
};
// @lc code=end
