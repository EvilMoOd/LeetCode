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
var isBalanced = function (root) {
  // 属于上一题的加强版，不同的是，这题需要记录左右的深度的同时比较差值是否大于1
  const dfs = (root) => {
    if (!root) return 0;
    const left = dfs(root.left);
    // 用返回-1表示结果为非平衡二叉树
    if (left === -1) return -1;
    const right = dfs(root.right);
    if (right === -1) return -1;
    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1;
  };
  return dfs(root) !== -1;
};
