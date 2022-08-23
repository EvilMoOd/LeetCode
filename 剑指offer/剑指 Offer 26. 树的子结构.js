/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  const same = (a, b) => {
    if (!b) return true;
    if (!a) return false;
    return a.val === b.val && same(a.left, b.left) && same(a.right, b.right);
  };
  if (!A || !B) return false;
  return same(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
