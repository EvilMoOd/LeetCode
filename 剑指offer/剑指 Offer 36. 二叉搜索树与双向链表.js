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
  // 用中序遍历即可顺序遍历完二叉搜索树，遍历的同时修改右指针指向
  let linkList = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    linkList.push(root);
    dfs(root.right);
  };
  dfs(root);
  for (let i = 0; i < linkList.length - 1; i++) {
    linkList[i].right = linkList[i + 1];
  }
  linkList[linkList.length - 1].right = linkList[0];
  for (let i = linkList.length; i > 0; i++) {
    linkList[i].left = linkList[i - 1];
  }
  linkList[0].left = linkList[linkList.length - 1];
  return root;
};
