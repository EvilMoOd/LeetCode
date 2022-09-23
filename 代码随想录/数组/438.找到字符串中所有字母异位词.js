/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  //滑动窗口，窗口里的字母进行排序，然后比较
  // let result = []
  // for (let i = 0; i < s.length - p.length; i++) {
  //   let newStr = s.substring(i, i + p.length)
  //   if (newStr.split("").sort().join("") == p) {
  //     result.push(i)
  //   }
  // };
  // return result;
  //超时了，不适合长到爆炸的字符串

  //滑动窗口，通过统计窗口中字母个数
  const sLen = s.length, pLen = p.length;

  if (sLen < pLen) {
    return [];
  }
  // 统计方式不是表，而是代表26字母的数组
  const ans = [];
  const count = Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++count[s[i].charCodeAt() - 'a'.charCodeAt()];
    --count[p[i].charCodeAt() - 'a'.charCodeAt()];
  }
//查看最后是否相同
  let differ = 0;
  for (let j = 0; j < 26; ++j) {
    if (count[j] !== 0) {
      ++differ;
    }
  }

  if (differ === 0) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {  // 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) {  // 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    --count[s[i].charCodeAt() - 'a'.charCodeAt()];

    if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === -1) {  // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === 0) {  // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    ++count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

    if (differ === 0) {
      ans.push(i + 1);
    }
  }

  return ans;
}
// @lc code=end

