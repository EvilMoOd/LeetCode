/*
 * @lc app=leetcode.cn id=1764 lang=javascript
 *
 * [1764] 通过连接另一个数组的子数组得到一个数组
 */

// @lc code=start
/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  // 因为有顺序的限制，所以本质上是贪心，模拟一遍题目过程即可
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (index > groups.length) return false;
    const arr = nums.slice(i, i + groups[index].length);
    if (compare(groups[index], arr)) {
      i = i + groups[index].length - 1;
      index++;
    }
    if (index === groups.length) return true;
  }
  return false;
};

function compare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// @lc code=end
