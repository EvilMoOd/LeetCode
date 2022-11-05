/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  const buildTree = (node) => {
    if (!node) return;
    return new TreeNode(node.val, buildTree(node.right), buildTree(node.left));
  };
  return buildTree(root);
  // 构造一棵新树，遍历顺序与构造顺序相反即可
};
// @lc code=end
