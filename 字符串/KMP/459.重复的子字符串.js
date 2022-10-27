/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    // return `${s}${s}`.slice(1, 2 * s.length - 1).indexOf(s) == -1 ? false : true
    const next = new Array(s.length).fill(0);
  for (let i = 1, j = 0; i < s.length; i++) {
    // whild循环，要不断的向上寻找。
    while (j > 0 && s[i] !== s[j]) {
      // 如果不同，我们要从未匹配好的地方开始继续匹配。
      // 未匹配好的位置在那里呢？👇
      // 我们知道 next 数组的值就代表每一次子串匹配好的长度，
      // 因为数组是从0开始的，所以该值就指向了未匹配好的位置。
      // 当j === 0时，说明要从头开始重新匹配了
      j = next[j - 1];
    }
    // 如果当前子串前后缀相等，就将更新子串，j++ i++
    if (s[i] === s[j]) j++;
    // 将当前子串的最长相等前后缀添加到next数组中
    next[i] = j;
  }

  /**
        a   s   d   a   s   d   a   s   d
        0   0   0   1   2   3   4   5   6       next数组

    我们可以看出如果s是由子串重复构成的话，会从第二个重复子串开始有最长相等前后缀，
    并且len - 6 就是第一个字串的长度 a s d，因为第一个子串都是0
    如果这个长度可以被整除，就说明整个字符串就是这个周期的循环。
*/
  if (
    next[next.length - 1] !== 0 &&
    s.length % (s.length - next[next.length - 1]) === 0
  )
    return true;

  return false;
  
};
// @lc code=end
