/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // 重构二叉树，节点值不在范围内则跳过该节点构建，节点的值比low小，取右子树，节点的值比high大，取左子树
  if (!root) return null;
  // 如果不在范围内，跳过当前节点，直接返回其左子树或者右子树
  if (root.val < low) return trimBST(root.right, low, high);
  else if (root.val >high) return trimBST(root.left, low, high);
  // 在范围内直接返回该节点并往下构建
  else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root
  }
  // 迭代法的话可以先找出根节点，再以根节点构建左右子树
};
// @lc code=end
