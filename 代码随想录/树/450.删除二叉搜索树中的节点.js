/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 删除节点存在五种情况：1、无此节点。2、左右为空。3、左孩子为空。4、右孩子为空。5、左右都有
  // 二叉搜索树遍历
  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    // 左右为空
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left && !root.right) {
      // 左空
      root = root.left;
    } else if (root.right && !root.left) {
      // 右空
      root = root.right;
    } else {
      // 左右都存在情况下，先获取右子树最左节点（最小节点）。将该节点代替要删除的节点即可
      let node = root.right;
      while (node.left) {
        node = node.left;
      }
      // 改变被删节点的值为右子树最小节点的值
      root.val = node.val;
      // 删除右子树最小节点
      root.right = deleteNode(root.right, root.val);
    }
  }
  return root;
};
// @lc code=end
