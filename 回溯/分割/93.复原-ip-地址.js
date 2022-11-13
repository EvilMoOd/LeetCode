/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const backtrack = (path, startIndex) => {
    if (path.length === 4 && startIndex === s.length) {
      res.push(path.join('.'));
      return;
    }
    if (path.lenth === 4 && startIndex < s.length) return;
    for (let i = startIndex; i < startIndex + 3; i++) {
      if (i >= s.length) return; //不能越界
      if (i > startIndex && s[startIndex] === '0') return; //不能前导0
      const str = s.slice(startIndex, i + 1);
      if (+str > 255) return; //范围为0~255
      backtrack(path.concat(str), i + 1);
    }
  };
  backtrack([], 0);
  return res;
  // 分割ip地址，每段长度为1~3，且不能0开头，不能大于255，当遍历到结尾时即为ip地址，否则跳过
};
// @lc code=end
