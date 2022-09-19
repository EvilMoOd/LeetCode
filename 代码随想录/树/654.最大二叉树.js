/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function (nums) {
  // 构建二叉树，直接暴力解即可
  if (!nums.length) return null;
  let maxValue = max(nums);
  const maxIndex = nums.indexOf(maxValue);
  let root = new TreeNode(maxValue);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
};
function max(arr) {
  let max = -Infinity;
  arr.forEach((e) => {
    max = Math.max(max, e);
  });
  return max;
}
// @lc code=end
