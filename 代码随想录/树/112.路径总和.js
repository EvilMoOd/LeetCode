/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false,
    sum = 0;
  let dfs = (node, sum) => {
    if (!node) return;
    // 每层做一次累计值、记录路径、判断路径
    sum += node.val;
    if (sum === targetSum && !node.left && !node.right) res = true;
    // 遍历
    node.left && dfs(node.left, sum);
    node.right && dfs(node.right, sum);
  };
  dfs(root, sum);
  return res;
};
// @lc code=end
