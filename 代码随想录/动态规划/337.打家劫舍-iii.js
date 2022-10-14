/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  // 动态规划，树形dp,该题选择后序遍历，主要思路是比较当前节点与其左右节点之和大小
  // 后序遍历函数
  const postOrder = (node) => {
    // 递归出口
    if (!node) return [0, 0];
    const left = postOrder(node.left);
    const right = postOrder(node.right);
    // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 偷当前节点，左右子节点只能不偷
    const Do = node.val + left[0] + right[0];
    // [不偷，偷]
    return [DoNot, Do];
  };
  const res = postOrder(root);
  // 返回最大值
  return Math.max(...res);
};
// @lc code=end
