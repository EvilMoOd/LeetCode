/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return;
  if (root.val > key) root.left = deleteNode(root.left, key);
  else if (root.val < key) root.right = deleteNode(root.right, key);
  else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let cur = root.right;
    while (cur.left) cur = cur.left;
    cur.left = root.left;
    return root.right;
  }
  return root;
  // 二叉搜索树，往左右搜索要删除的节点，搜索的方式为重构二叉树
  // 当搜索到时出现三种情况，分别是左右各一条子树，这两种可以直接进行返回作为递归的拼接
  // 左右都有子树的情况，需要找到右子树的最左边节点，然后将左子树接到该位置的左子树并返回
};
// @lc code=end
