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
  const dfs = (root) => {
    //边界条件
    if (!root) return;
    //是左叶子节点
    if (root.left && !root.left.left && !root.left.right) {
      res = res + root.left.val;
    }
    //不是左叶子节点
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return res;
  // 左叶子节点而非左侧节点，不能使用层序遍历
  // 该题采用隔层判断，判断某节点的左侧节点是否是左叶子，如果不是则往下递归
};
// @lc code=end
