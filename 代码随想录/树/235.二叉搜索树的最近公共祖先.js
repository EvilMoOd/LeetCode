/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
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
  // 二叉搜索树子节点左小右大，满足此条件的p和q就是其公共祖先节点
  while (
    (root.val > p.val && root.val > q.val) ||
    (root.val < p.val && root.val < q.val)
  ) {
    if (root.val > p.val && root.val > q.val) root = root.left;
    if (root.val < p.val && root.val < q.val) root = root.right;
  }
  return root;
};
// @lc code=end
