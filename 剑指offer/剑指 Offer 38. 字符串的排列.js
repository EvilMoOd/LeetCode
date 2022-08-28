/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  // 数学中的排列问题，用程序实现就是递归
  // 固定一个字母排列剩下字母，由小字符串逐渐排成大字符串
  if (s.length <= 1) return [s];
  const res = [];
  for (let i = 0; i < s.length; i++) {
    // 取出一个字符为char，然后把剩下的字符往下递归排列组合
    const pickOne = s[i];
    // 往下递归，返回每一次排列好的字符串数组
    const other = permutation(s.slice(0, i) + s.slice(i + 1));
    // 然后将每种组合与首字符串拼接，添加成新的字符串组
    other.forEach((item) => {
      res.push(pickOne + item);
    });
  }
  // 考虑到字符串中字符可能重复，所以去重处理
  return [...new Set(res)];
};
