/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const dfs = (node1, node2) => {
    if ((!node1 && node2) || (node1 && !node2)) return false;
    else if (!node1 && !node2) return true;
    else
      return (
        node1.val === node2.val &&
        dfs(node1.left, node2.right) &&
        dfs(node1.right, node2.left)
      );
  };
  return dfs(root.left, root.right);
  // 与100题解法一致，本质上就是判断root节点的左右子树是否相同
};
// @lc code=end
