/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    // 1、栈。2、双指针
    const fuc = (str, res = []) => {
        for (let i = 0; i <= str.length; i++) {
            str[i] == '#' ? res.pop() : res.push(str[i])
        }
        return res.join('')
    }
    return fuc(s) === fuc(t)
};
// @lc code=end

