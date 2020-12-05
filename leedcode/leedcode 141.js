/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//链表是否有环

function ListNode(val) {
    this.val = val;
   this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //方法一：标记 把经过的都标记一遍
 var hasCycle = function(head) {
  if(!head||!head.next) return false;
  while(head){
      if(head.tag) return true;
      head.tag=true;
      head=head.next;
  }
  return false;
};

//方法二：hashMap 把经过的都存储一遍 类似于方法一
var hasCycle = function(head) {
  if(!head||!head.next) return false;
  let map=new Map();
  while(head){
      if(map.has(head)) return true;
      map.set(head,true);
      head=head.next;
  }
  return false;
};

//方法三：快慢指针，我们知道如果在操场上有两人一快一慢奔跑，迟早会相遇，那么快慢指针同理，如果能相遇，则表示有环，如果不想遇，则无。
var hasCycle = function(head) {
  if(!head || !head.next) return false
  let fast=head.next;
  let slow=head;
  while (fast!=slow) {
      if (!fast||!fast.next) return false  //注意fast和fast.next顺序会影响结果；
      fast=fast.next.next;
      slow=slow.next;
  }
  return true;
}
