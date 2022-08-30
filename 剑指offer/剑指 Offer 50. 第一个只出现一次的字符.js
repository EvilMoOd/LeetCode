/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  // 冲突问题想到哈希表
  let map = new Map();
  for (const i of s) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }
  for (const i of s) {
    if (map.get(i) === 1) return i;
  }
  return ' ';

  // 还可以用字符串api来解决
  for (const i of s) {
    if(s.indexOf(i) === s.lastIndexOf(i)) return i
  }
  return ' '
};
