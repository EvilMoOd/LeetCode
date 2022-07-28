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
  // 递归遍历，遍历时顺便添加箭头，当到达无子节点的节点时跳出递归
  const res = [];
  const dfs = (root, cur) => {
    //遍历到叶子
    if (!root.left && !root.right) {
      cur += root.val;
      res.push(cur);
      return;
    }
    cur += root.val + '->';
    root.left && dfs(root.left, cur);
    root.right && dfs(root.right, cur);
  };
  dfs(root, '');
  return res;
};
// @lc code=end
