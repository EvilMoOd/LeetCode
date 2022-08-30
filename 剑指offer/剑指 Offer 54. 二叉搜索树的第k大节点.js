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
  // 中序遍历，返回逆序
  let res = [];
  const dfs = (root) => {
    if (!root) return;
    root.left && dfs(root.left);
    res.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);
  return res[res.length - k];
};
