/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 空间换时间，将元素记录在集合中，遍历集合元素，找到最小不连续数，然后循环+1判断该数在不在集合中，在的话长度+1，然后比较得出最长序列长度
  if (nums.length < 2) return nums.length;
  let res = 0;
  let set = new Set(nums);
  for (let i of set) {
    if (!set.has(i - 1)) {
      let len = 1;
      while (set.has(i + 1)) {
        len++;
        i++;
      }
      res = Math.max(len, res);
    }
  }
  return res;
};
// @lc code=end
