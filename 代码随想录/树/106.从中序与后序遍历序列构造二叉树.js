/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 中后序遍历特性：先遍历左子树再右子树，后序最后一个元素为构建时的根节点
  // 递归直到数组为空
  if (inorder.length === 0) return null;
  // 将后序遍历的最后一个元素为当前根节点和轴可以将中序遍历分为左右子树
  const val = postorder.pop();
  const node = new TreeNode(val);
  const indexV = inorder.indexOf(val);
  // 左右节点递归
  node.left = buildTree(inorder.splice(0, indexV), postorder.splice(0, indexV));
  node.right = buildTree(inorder.splice(1), postorder);
  return node;
};
// @lc code=end
