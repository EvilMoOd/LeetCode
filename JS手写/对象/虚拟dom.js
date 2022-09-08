// 生成虚拟dom
const dom2tree = (node) => {
  const obj = {};
  obj.tag = node.tagName;
  obj.children = [];
  node.childNodes.forEach((child) => obj.children.push(dom2tree(child)));
  return obj;
};
// 渲染
function _render(vnode) {
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }

  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(attrs).forEach((key) => {
      const attr = artts[key];
      dom.setAttribute(key, attr);
    });
  }
  vnode.children.forEach((child) => dom.appenChild(_render(child)));

  return dom;
}
