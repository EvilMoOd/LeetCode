/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let map = new Map();
  let dfs = (node) => {
    if (!node) return;
    node.left && dfs(node.left);
    if (map.has(node.val)) {
      map.set(node.val, map.get(node.val) + 1);
    } else {
      map.set(node.val, 1);
    }
    node.right && dfs(node.right);
  };
  dfs(root);
  let mode = [];
  let max = 0;
  map.forEach((val, key) => {
    if (val > max) max = val;
  });
  map.forEach((val, key) => {
    if (val === max) mode.push(key);
  });
  return mode;
};
// @lc code=end
