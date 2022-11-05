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
  const dfs = (sum, node) => {
    if (!node) return false;
    else if (sum + node.val === targetSum && !node.left && !node.right)
      return true;
    else
      return dfs(sum + node.val, node.left) || dfs(sum + node.val, node.right);
  };
  return dfs(0, root);
  // 往下遍历的同时记录每一条递归路径的和，然后与target比较并判断是否为叶子节点，如果是则返回true
  // 这里用了或运算符，只要有一条路径上为true，则整棵树返回true，如果遍历到最后还是找不到，则返回false
};
// @lc code=end
