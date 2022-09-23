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
  // 终止条件，节点等于p或q，否则返回null
  if (!root || root === p || root === q) return root;
  // 递归遍历找到left和right
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 找到祖宗节点，即左右都不为null
  if (!left) return right;
  if (!right) return left;
  return root;
};