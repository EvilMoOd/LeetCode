/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  // s = s.split('').sort().join('');//排序
  const set = new Set();
  const backtrack = (path, str) => {
    if (path.length === s.length && !set.has(path)) set.add(path);
    for (let i = 0; i < str.length; i++) {
      // if (str[i] === str[i - 1]) continue;//剪枝
      backtrack(path.concat(str[i]), str.slice(0, i) + str.slice(i + 1));
    }
  };
  backtrack('', s);
  return [...set];
  // 回溯法，可以用排序剪枝来提高速度，但考虑到排序可能还会更复杂，所以感觉也不是很必要
  // 原来偷懒使用了includes API偷懒，结果发现这个api十分耗时，所以还是直接使用了set来进行去重
};
