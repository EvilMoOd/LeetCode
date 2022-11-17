/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //建表
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let len = s.length
    let sum = 0;
    for (let i = 0; i < len;) {
        //查找2位有效罗马数字
        if (i + 1 < len && map[s.substring(i, i + 2)]) {
            sum += map[s.substring(i, i + 2)];
            i += 2
        } else {//否则查找1位
            sum += map[s.substring(i, i + 1)]
            i++
        }
    }
    return sum;
};
// @lc code=end

