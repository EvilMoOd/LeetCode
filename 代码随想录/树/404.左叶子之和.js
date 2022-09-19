/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let res = 0;
  const dfs = (node) => {
    // 左叶子节点的判断条件
    if (node.left && node.left.left === null && node.left.right === null) {
      res += node.left.val;
    }
    if (!node) return;
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  };
  dfs(root);
  return res;
};
// @lc code=end
