/* // 转换前：
source = [{
            id: 1,
            pid: 0,
            name: 'body'
          }, {
            id: 2,
            pid: 1,
            name: 'title'
          }, {
            id: 3,
            pid: 2,
            name: 'div'
          }]
// 转换为: 
tree = [{
          id: 1,
          pid: 0,
          name: 'body',
          children: [{
            id: 2,
            pid: 1,
            name: 'title',
            children: [{
              id: 3,
              pid: 1,
              name: 'div'
            }]
          }
        }] */

function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let res = []
  if (!Array.isArray(data)) {
    return res
  } else {
    res.push(data[0])
  }
  let i = 1
  const dfs = (obj) => {
    if (i < data.length) {
      obj.children = [data[i]]
      i++
      dfs(obj.children[0])
    }
  }
  dfs(res[0])
  return res
}

function tree2json(tree) {
  if (tree[0].children) {
    tree.push(tree2json(tree[0].children))
    delete tree[0].children
  } else {
    return tree[0]
  }
  return tree.flat()
}