/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) return false;

  if (same(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  //比较两棵树
  function same(left, right) {
    // if (!left || !right) return left === right;这里有缺陷，如果b完了a没完，会导致true变false
    if (!right) return true;
    if (!left) return false;
    return (
      left.val === right.val &&
      same(left.left, right.left) &&
      same(left.right, right.right)
    );
  }
};
// @lc code=end
