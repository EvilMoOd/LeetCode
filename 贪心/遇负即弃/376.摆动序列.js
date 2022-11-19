/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;
  let res = 1,
    pre = 0,
    cur;
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i] - nums[i - 1];
    if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
      res++;
      pre = cur;
    }
  }
  return res;
  // 该题需要通过删除某些子序列来达成最长摆动序列，但实际上只需要跳过那些单调节点即可，节点之间进行简单的累加
  // 记录上坡（下坡），然后找到下一个下坡（上坡），统计长度，只取局部坡（这也叫贪心咩。。。感觉是题目加了条件所以强行贪心）
};
// @lc code=end
