/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = (node1, node2) => {
    if ((!node1 && node2) || (node1 && !node2)) {
      return false;
    } else if (!node1 && !node2) {
      return true;
    } else {
      return (
        node1.val === node2.val &&
        dfs(node1.left, node2.left) &&
        dfs(node1.right, node2.right)
      );
    }
  };
  return dfs(p, q);
  // 递归遍历可以同时传入多棵树，遍历相同树时除了判断节点是否相等外，还需判断节点是否同时存在，或者只有其中一个存在
};
// @lc code=end
