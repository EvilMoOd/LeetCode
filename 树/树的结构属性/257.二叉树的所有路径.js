/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  const backtrack = (path, node) => {
    if (!node) return;
    if (!node.left && !node.right) {
      res.push(path.concat(node.val));
      return;
    }
    backtrack(path.concat(node.val), node.left);
    backtrack(path.concat(node.val), node.right);
  };
  backtrack([], root);
  return res.map((item) => item.join('->'));
  // 回溯
};
// @lc code=end
