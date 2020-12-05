/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//�����Ƿ��л�

function ListNode(val) {
    this.val = val;
   this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //����һ����� �Ѿ����Ķ����һ��
 var hasCycle = function(head) {
  if(!head||!head.next) return false;
  while(head){
      if(head.tag) return true;
      head.tag=true;
      head=head.next;
  }
  return false;
};

//��������hashMap �Ѿ����Ķ��洢һ�� �����ڷ���һ
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

//������������ָ�룬����֪������ڲٳ���������һ��һ�����ܣ��������������ô����ָ��ͬ����������������ʾ�л�����������������ޡ�
var hasCycle = function(head) {
  if(!head || !head.next) return false
  let fast=head.next;
  let slow=head;
  while (fast!=slow) {
      if (!fast||!fast.next) return false  //ע��fast��fast.next˳���Ӱ������
      fast=fast.next.next;
      slow=slow.next;
  }
  return true;
}
