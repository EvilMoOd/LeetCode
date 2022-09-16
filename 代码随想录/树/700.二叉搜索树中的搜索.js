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
  let dfs = (node) => {
    if (!node) return null;
    if (node.val === val) {
      return node;
    } else if (node.val > val) {
      return dfs(node.left);
    } else if (node.val < val) {
      return dfs(node.right);
    }
  };
  return dfs(root)
};
// @lc code=end
