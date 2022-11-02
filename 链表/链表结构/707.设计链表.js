/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = new ListNode();
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) return -1;
  let cur = this.head;
  while (index + 1) {
    cur = cur.next;
    index--;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  let cur = this.head;
  while (index) {
    cur = cur.next;
    index--;
  }
  const newNode = new ListNode(val);
  newNode.next = cur.next;
  cur.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let cur = this.head;
  while (index) {
    cur = cur.next;
    index--;
  }
  cur.next = cur.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

/* 
  首先需要一个创建节点的构造函数，包含next和val即可，然后是新链表中创建好头结点和size，方便后续的操作
  get要注意index表示的索引从0开始，也就是说比size大一，要注意判断index是否越界以及循环时要多循环一次
  addHead和addTail可以直接用addIndex方法
  addIndex才用头结点的方式为节点进行增加操作，特别注意index是否越界
  delete操作同理需要判断是否越界
*/