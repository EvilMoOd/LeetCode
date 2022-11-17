/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  // 104题使用递归的方式获取树的最大深度，本题其实也是对此的扩展，我们取每个节点的左右子树最大深度之和+1就是该节点为根节点的最长直径，遍历所有节点即可求得结果
  // 不过这题比较奇怪的一点是根节点不计入直径长度
  let res = 0;
  function dfs(node) {
    if (!node) return 0;
    let left = dfs(node.left),
      right = dfs(node.right);
    res = Math.max(res, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return res;
};
// @lc code=end
