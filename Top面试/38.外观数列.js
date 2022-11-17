/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    //递归
    if (n === 1) return "1";
    const s = countAndSay(n - 1)

    let string = ""
    let count = 1
    let item = s[0]
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === item) {
            count++
        } else {
            string += `${count}${item}`
            item = s[i]
            count = 1
        }
    }
    return string;
};
// @lc code=end

