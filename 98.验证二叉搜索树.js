/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  let res = true;
  let last = -Infinity;
  const dfs = (node) => {
    if (!node) return;
    node.left && dfs(node.left);
    if (node.val <= last) res = false;
    last = node.val;
    node.right && dfs(node.right);
  };
  dfs(root);
  return res;
  // 二叉搜索树一重要特点是中序遍历呈递增趋势，只要保证中序遍历递增即true
};
// @lc code=end
