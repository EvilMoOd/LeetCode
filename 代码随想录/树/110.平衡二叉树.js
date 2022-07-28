/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (root) => {
    if (!root) return 0; //终止
    //左子树
    const left = dfs(root.left);
    if (left === -1) return -1;
    //右子树
    const right = dfs(root.right);
    if (right === -1) return -1;
    //累计高度，若高度超过则跳出递归
    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1;
  };
  return dfs(root) !== -1;
};
// @lc code=end
