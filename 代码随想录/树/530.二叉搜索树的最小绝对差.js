/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  // 中序遍历比较当前和前一个的差值
  let pre = -Infinity;
  let cha = Infinity;
  let dfs = (node) => {
    if (!node) return;
    node.left && dfs(node.left);
    cha = Math.min(cha, node.val - pre);
    pre = node.val;
    node.right && dfs(node.right);
  };
  dfs(root);
  return cha;
};
// @lc code=end
