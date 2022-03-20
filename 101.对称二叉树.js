/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return mirror(root.left, root.right)
    function mirror(left, right) {
        if (left == null && right == null) return true
        if (left == null || right == null) return false
        if (left.val != right.val) return false
        return mirror(left.left, right.right) && mirror(left.right, right.left)
    }
};
// @lc code=end

