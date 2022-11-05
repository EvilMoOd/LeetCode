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
  if (!B) return false;
  const compare = (node1, node2) => {
    if (!node2) return true;//子树匹配完全
    else if (!node1 && node2) return false;//主树匹配完但子树还未匹配完
    else
      return (
        node1.val === node2.val &&
        compare(node1.left, node2.left) &&
        compare(node1.right, node2.right)
      );
  };
  const dfs = (node) => {
    if (!node) return false;
    return compare(node, B) || dfs(node.left) || dfs(node.right);
  };
  return dfs(A);
  // 思路与572类似，不同在于该题并不需要使两棵树完全匹配，只需要使子树匹配即可
};
