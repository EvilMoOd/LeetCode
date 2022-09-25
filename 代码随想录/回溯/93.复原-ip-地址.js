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
  // 越界
  if (s.length < 4 || s.length > 12) return [];
  const res = [];
  const backtrack = (path, start) => {
    // 满 4 段，但是字符未耗尽，无效
    if (path.length === 4 && start < s.length) return;
    // 满 4 段，且耗尽了所有字符，有效
    if (path.length === 4 && start === s.length) {
      res.push(path.join('.'));
      return;
    }
    for (let len = 1; len <= 3; len++) { // 三种切割长度，三个子节点
      if (start + len - 1 >= s.length) return; // 超过 s 的长度，越界
      if (len > 1 && s[start] === '0') return; // 不能有前导 0
      const str = s.substring(start, start + len); // 当前 IP 段
      if (len === 3 && +str > 255) return; // 不能大于 255
      backtrack(path.concat(str), start + len);
    }
  }

  backtrack([], 0);
  return res;
};
// @lc code=end

