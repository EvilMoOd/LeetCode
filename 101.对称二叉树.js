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
    // 暴力递归，若左右节点不存在
    return mirror(root.left, root.right)
    function mirror(left, right) {
        if (left == null && right == null) return true // 左右都空
        if (left == null || right == null) return false // 其中一个为空，不对称
        if (left.val != right.val) return false // 值不对称
        return mirror(left.left, right.right) && mirror(left.right, right.left) // 递归往下遍历
    }
};
// @lc code=end

