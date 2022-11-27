/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let mask = 1; // 使用一个遮罩，每次判断二进制中的一位是0还是1，将其赋值给result
  let result = 0; // 存储结果

  // 以此对比32位二进制数
  for (let i = 0; i < 32; i++) {
    // 每次将结果左移一位，将当前数字填入空位
    // 如果将移动放在if语句之后，会导致多移动一位
    result <<= 1;

    // 判断当前位置是0还是1
    if (n & mask) {
      // 如果是1，才需要填入1
      // 如果是0，无需填入，当前位置左移后自然是0
      result += 1;
    }

    // 将遮罩左移一位，判断下一个位置
    mask <<= 1;
  }
  return result >>> 0;
};
// @lc code=end
