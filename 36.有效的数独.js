/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
//真的不会
var isValidSudoku = function (board) {
    let row = {}
    let col = {}
    let box = {}
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j]
            if (num !== '.') {
                let boxindex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i + '' + num] || col[j + '' + num] || box[boxindex + '' + num]) {
                    return false
                }
                row[i + '' + num] = true
                col[j + '' + num] = true
                box[boxindex + '' + num] = true
            }
        }
    }
    return true;
};
// @lc code=end

