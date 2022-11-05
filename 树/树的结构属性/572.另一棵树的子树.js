/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const compare = (node1, node2) => {
    if ((!node1 && node2) || (node1 && !node2)) return false;
    else if (!node1 && !node2) return true;
    else
      return (
        node1.val === node2.val &&
        compare(node1.left, node2.left) &&
        compare(node1.right, node2.right)
      );
  };
  const dfs = (node) => {
    if (!node) return false;
    return compare(node, subRoot) || dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
  // 思路与100相同，只是需要以每一个节点作为root去比较相同的树
};
// @lc code=end
