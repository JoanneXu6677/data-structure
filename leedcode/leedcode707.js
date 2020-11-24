/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head=null;
    this.tail=null;
    this.length=0;
  };
function Node(data){
    this.val=data;
    this.next=null;
}
  
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  MyLinkedList.prototype.get = function(index) {
      //越界判断
      if(index<0||index>=this.length) return -1;
      var count=0;
      var current=this.head;
      while(count<index){
          //注意！！！
          if(current.next==null) return -1;
          count+=1;
          current=current.next;
      }
      return current.val;
  };
  
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtHead = function(val) {
    var newNode=new Node(val);
    //考虑是否有元素
    if(this.length==0){
        this.head=newNode;
        this.tail=newNode;
    }else{
        newNode.next=this.head;
        this.head=newNode;
    }

    this.length++;
  };
  
  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtTail = function(val) {
      var newNode=new Node(val);
      //考虑是否有元素
      if(this.length!=0){
        this.tail.next=newNode;
        this.tail=newNode;
      }else{
          this.head=newNode;
          this.tail=newNode;
      }
      this.length++;
  };
  
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list
   * , the node will be appended to the end of linked list. 
   * If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtIndex = function(index, val) {
     if(index>this.length) return false;
     var newNode=new Node(val);
     if(index<=0){
         var current=this.head;
         this.head=newNode;
         this.head.next=current;
     }else if(index==this.length){
        var current=this.tail;
        current.next=newNode;
        this.tail=newNode;
     }else{
         var current=this.head;
         var previous=null;
         var count=0;
         while(count!=index){
             previous=current;
             current=current.next;
             count++;
         }
         previous.next=newNode;
         newNode.next=current;
     }
        this.length++;
     
  };
  
  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0||index>=this.length||this.length==0) return false;
    if(index==0){
        this.head=this.head.next;
        
    }else{
        var count=0;
        var previous=null;
        var current=this.head;
        while(count<index){
            count++;
            previous=current;
            current=current.next;
        }
        if(current==null) {
            previous.next=null;
            this.tail=previous;
        }else{
            previous.next=current.next;
        } 
    }
    this.length--;
  };
  
  //测试
  MyLinkedList.prototype.toString = function() {
     var current=this.head;
     if(this.head==null) return null;
     var string="";
     while(current){
         string=string+current.val+" ";
         current=current.next;
     }
     return string;
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
  var obj = new MyLinkedList();
//   obj.addAtHead(7);
//   obj.addAtHead(2);
//   obj.addAtHead(1);
//   obj.addAtIndex(3,0);
//   obj.deleteAtIndex(2);
//   obj.addAtHead(6);
//   obj.addAtTail(4);
//   console.log(obj.toString());
//   console.log(obj.length)
//   console.log(obj.get(4));
//   obj.addAtHead(4);
//   obj.addAtIndex(5,0);
//   obj.addAtHead(6);
obj.addAtHead(2);
obj.addAtTail(1);
obj.addAtTail(9);
  console.log(obj.get(0));
  console.log(obj.get(1));
  obj.addAtTail(3);
  obj.addAtIndex(5,0);
  obj.addAtHead(2);
  obj.addAtHead(2);
  obj.addAtTail(3);
  obj.addAtTail(3);
  console.log(obj.get(1));
 obj.deleteAtIndex(2);
  console.log(obj.toString());

  /*["MyLinkedList","addAtHead","addAtTail",
  "addAtTail","get","get",
  "addAtTail","addAtIndex","addAtHead",
  "addAtHead","addAtTail","addAtTail",
  "addAtTail","addAtTail","get",
  "addAtHead","addAtHead","addAtIndex",
  "addAtIndex","addAtHead","addAtTail",
  "deleteAtIndex","addAtHead","addAtHead",
  "addAtIndex","addAtTail","get","addAtIndex",
  "addAtTail","addAtHead","addAtHead",
  "addAtIndex","addAtTail","addAtHead",
  "addAtHead","get","deleteAtIndex",
  "addAtTail","addAtTail","addAtHead",
  "addAtTail","get","deleteAtIndex",
  "addAtTail","addAtHead","addAtTail",
  "deleteAtIndex","addAtTail","deleteAtIndex",
  "addAtIndex","deleteAtIndex","addAtTail",
  "addAtHead","addAtIndex","addAtHead","addAtHead",
  "get","addAtHead","get","addAtHead","deleteAtIndex",
  "get","addAtHead","addAtTail","get",
  "addAtHead","get","addAtTail","get",
  "addAtTail","addAtHead","addAtIndex",
  "addAtIndex","addAtHead","addAtHead",
  "deleteAtIndex","get","addAtHead","addAtIndex","addAtTail",
  "get","addAtIndex","get","addAtIndex","get","addAtIndex",
  "addAtIndex","addAtHead","addAtHead","addAtTail",
  "addAtIndex","get","addAtHead",
  "addAtTail","addAtTail","addAtHead",
  "get","addAtTail","addAtHead","addAtTail",
  "get","addAtIndex"]
[[],[84],[2],[39],[3],[1],[42],[1,80],[14],[1],[53],[98],[19],[12],[2],[16],[33],[4,17],[6,8],[37],[43],[11],[80],[31],[13,23],[17],[4],[10,0],[21],[73],[22],[24,37],[14],[97],[8],[6],[17],[50],[28],[76],[79],[18],[30],[5],[9],[83],[3],[40],[26],[20,90],[30],[40],[56],[15,23],[51],[21],[26],[83],[30],[12],[8],[4],[20],[45],[10],[56],[18],[33],[2],[70],[57],[31,24],[16,92],[40],[23],[26],[1],[92],[3,78],[42],[18],[39,9],[13],[33,17],[51],[18,95],[18,33],[80],[21],[7],[17,46],[33],[60],[26],[4],[9],[45],[38],[95],[78],[54],[42,86]]
*/