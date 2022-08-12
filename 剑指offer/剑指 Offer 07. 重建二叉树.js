/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  if (rootIndex !== 0) {
    root.left = buildTree(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
  }
  if (rootIndex !== preorder.length - 1) {
    root.right = buildTree(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
  }
  return root;
};
