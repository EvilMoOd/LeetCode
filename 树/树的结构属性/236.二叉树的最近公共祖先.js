/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 遍历到p或q时返回root，否则返回的root为null
  if (!root || root === p || root === q) return root;
  // 往左右节点遍历
  let leftNode = lowestCommonAncestor(root.left, p, q);
  let rightNode = lowestCommonAncestor(root.right, p, q);
  // 非左返右,非右返左的结果是，只返回目标值，其他情况下返回空
  if (!leftNode) return rightNode;
  if (!rightNode) return leftNode;
  // 当左右节点都非空时说明找到了公共祖先节点，将其返回
  if (leftNode && rightNode) return root;
};
// @lc code=end
