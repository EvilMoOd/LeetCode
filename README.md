# 开始二周目

总题量26+22+11+9+13+47=129+14+17+41=201

## 调试

`continue` 继续 断点间移动
`step in` 单步调试 逐步走 进入函数或循环
`step out` 单步跳出  跳出函数或跳出循环(函数内有断点会被卡住，非循环函数体与`continue`功能一致)
`step over` 单步跳过 逐步走 但跳过函数(函数内有断点拦截，再按则与`step in`功能一致)

## 数组

15
54
240
剑66

双指针在数组问题中经常出现，可以说是数组问题核心都不为过
双指针可以进阶成滑动窗口问题和二分法，都是基于双指针

## 字符串

400
剑20
剑62
151
541

137
260

28
459

字符串的题多和数组类似，也包括了一些数学的题目，都放在字符串这一块里
字符串属性里常问到回文串，有许多种出题方式，动态规划解法放在了动态规划一章中，另外还有中心扩散法非常适合回文串的判断
操作字符串中常用到排序和翻转，另外还有正则来进行快速匹配
位运算常用 num&1获取奇偶数或是判断二进制个位 | num << i代替2**i | num >> 1代替Math.floor(num/2) | ^=来异或消消乐

## 表集

454
剑60
202
347

字母异位词常用map解决

## 栈和队列

比较简单

## 链表

21
24
206
138
142
707

链表作为指针型数据结构，当操作节点增删改查时，往往需要用循环去移动指针，而在操作指针时，也常常在链表前加一个头结点，便于更好地操作（若要操作第i个节点，必须先获取到第i-1个节点）
