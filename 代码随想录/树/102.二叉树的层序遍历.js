/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //1、队列实现。2、双队列。3、DFS
    let res = [], queue = []
    queue.push(root)
    if (!root) return res
    while (queue.length) {
        let curLevel = []
        //这里必须在for循环前记录队列长度，否则每次for循环都会改变队列长度
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
};
// @lc code=end

