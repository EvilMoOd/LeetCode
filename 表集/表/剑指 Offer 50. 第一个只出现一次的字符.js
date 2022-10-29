/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  let res = ' ';
  for (const i of s) map.set(i, map.has(i) ? map.get(i) + 1 : 1);
  map.forEach((value, key) => {
    if (value === 1 && res === ' ') res = key;
  });
  return res;
  // 秒杀
};
