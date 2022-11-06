/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    res.push(node.val);
    dfs(node.left);
  };
  dfs(root);
  return res[k - 1];
  // 反向中序遍历二叉搜索树即可
};
