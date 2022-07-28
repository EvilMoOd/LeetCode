/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

//创建维护链表头、尾、长度
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};
//节点
var ListNode = function (val) {
  this.val = val;
  this.next = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  //边缘判断index是否超出链表长度
  if (index >= 0 && index < this.length) {
    let i = 0
    let cur = this.head
    //index为几，节点就移动多少，最后返回到达的节点值
    while (i < index) {
      cur = cur.next
      i++
    }
    return cur.val
  } else {
    return -1
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const lastHead = this.head
  const node = new ListNode(val)
  this.head = node
  this.head.next = lastHead
  if (!this.tail) {
    this.tail = node
    this.tail.next = null
  }
  this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const lastTail = this.tail
  const node = new ListNode(val)
  this.tail = node
  if (lastTail) {
    lastTail.next = this.tail
  }
  if (!this.head) {
    this.head = node
    this.head.next = null
  }
  this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === this.length) {
    this.addAtTail(val)
  } else if (index <= 0) {
    this.addAtHead(val)
  } else if (index > 0 && index < this.length) {
    let i = 0
    let prev = this.head
    while (i < index - 1) {
      prev = prev.next
      i++
    }
    const node = new ListNode(val)
    node.next = prev.next
    prev.next = node
    this.length++
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > 0 && index < this.length) {
    let i = 0
    let prev = null
    let cur = this.head
    while (i < index) {
      prev = cur
      cur = cur.next
      i++
    }
    prev.next = cur.next
    if (index === this.length - 1) {
      this.tail = prev
    }
    this.length--
  } else if (index === 0) {
    this.head = this.head.next
    this.length--
  }

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

