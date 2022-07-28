/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    //1、中序遍历、递归
    let preVal = -Infinity,
        flag = true;
    const inOrder = (root) => {
        //判断是否二叉搜索树
        if (!flag) return
        //根节点遍历到空为止
        if (!root) return
        // 左根右中序遍历并判断题目条件
        inOrder(root.left)
        if (root.val <= preVal) {
            flag = false;
            return
        }
        preVal = root.val
        inOrder(root.right)
    }
    inOrder(root)
    return flag
};
// @lc code=end

