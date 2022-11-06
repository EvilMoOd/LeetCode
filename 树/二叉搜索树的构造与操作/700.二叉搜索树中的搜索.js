/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (!node) return node;
    if (node.val > val) return dfs(node.left);
    else if (node.val < val) return dfs(node.right);
    else return node;
  };
  return dfs(root);
  // 用二叉搜索树性质进行快速递归搜索
};
// @lc code=end
