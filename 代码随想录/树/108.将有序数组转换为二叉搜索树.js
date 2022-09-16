/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  let t = nums.length >> 1;
  let node = new TreeNode(nums[t]);
  if (t > 0) node.left = sortedArrayToBST(nums.slice(0, t));
  if (t + 1 < nums.length)
    node.right = sortedArrayToBST(nums.slice(t + 1, nums.length));
  return node;
};
// @lc code=end
