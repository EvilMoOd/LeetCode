/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  // 暴力
  const get = (num) => {
    let a = 0;
    while (num) {
      a += num & 1;
      num >>= 1;
    }
    return a;
  };
  return arr.sort((a, b) => (get(a) !== get(b) ? get(a) - get(b) : a - b));
};
// @lc code=end
