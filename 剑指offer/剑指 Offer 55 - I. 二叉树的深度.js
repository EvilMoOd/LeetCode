/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 每个递归函数返回左右层级的最大值+自己一层
  return root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
