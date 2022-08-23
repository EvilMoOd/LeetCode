/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let same = (a, b) => {
    if (!a || !b) return;
    return a.val === b.val || same(a.left, b.right) || same(a.right, b.left);
  };
  return same(root);
};
