/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null;
  mirrorTree(root.left);
  mirrorTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};
