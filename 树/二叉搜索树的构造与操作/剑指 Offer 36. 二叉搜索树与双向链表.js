/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return;
  let head, pre;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    // 赋头结点，其余情况正常构建链表
    if (!pre) head = node; 
    else pre.right = node;
    node.left = pre;
    pre = node;
    dfs(node.right);
  };
  dfs(root);
  // 首尾相接
  head.left = pre;
  pre.right = head;
  return head;
  // 中序遍历即可
};
