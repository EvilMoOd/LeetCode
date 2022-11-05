/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];
  const backtrack = (path, sum, node) => {
    if (!node) return;
    else if (sum + node.val === targetSum && !node.left && !node.right)
      res.push(path.concat(node.val));
    backtrack(path.concat(node.val), sum + node.val, node.left);
    backtrack(path.concat(node.val), sum + node.val, node.right);
  };
  backtrack([], 0, root);
  return res;
  // 与路径总和思路差不多，差别在于需要记录路径，套回溯模板即可
};
// @lc code=end
