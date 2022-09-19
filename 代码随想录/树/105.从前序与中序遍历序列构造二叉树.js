/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 递归，以两种遍历方式的根节点为轴，分成更小的树再进行分，重复递归
  if (!preorder.length || !inorder.length) return null;
  let rootIndex = inorder.findIndex(preorder[0]);
  let root = new TreeNode(preorder[0]);
  if (rootIndex !== 0) {
    root.left = buildTree(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
  }
  if (rootIndex !== preorder.length - 1) {
    root.right = buildTree(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
  }
  return root;
};
// @lc code=end
