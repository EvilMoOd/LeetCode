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
  if (!root) return [];
  let res = [],
    path = [],
    sum = 0;
  let findPath = (root, sum) => {
    // 记录路径和路径的总值，作为参数往下递归
    path.push(root.val);
    sum += root.val;
    // 到叶子节点则判断sum
    if (sum === targetSum && !root.left && !root.right) res.push(path.slice());
    root.left && findPath(root.left, sum);
    root.right && findPath(root.right, sum);
    // 记得回溯
    path.pop();
  };
  findPath(root, sum);
  return res;
};
// @lc code=end
