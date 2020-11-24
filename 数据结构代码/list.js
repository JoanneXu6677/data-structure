
        //封装链表类
        function LinkedList() {
            //属性
            this.head=null;
            //内部节点类
            function Node(data){
                this.data=data;
                this.next=null;
            }
            //记录链表的长度
            this.length=0;
            
            //1.追加方法
            LinkedList.prototype.append=function(data){
                //1.创建新节点
                var newNode=new Node(data);
                //2.判断是否添加的第一个节点
                if(this.length==0){
                    this.head=newNode;
                }else{
                    //找到第一个节点
                    var current=this.head;
                    //找到最后一个节点
                    while(current.next){
                        current=current.next;
                    }
                    //最后节点的next指向新的节点
                    current.next=newNode;
                }
                //3.length+1
                this.length += 1;
            }

            //toString方法
            LinkedList.prototype.toString=function(){
                var current=this.head;
                var listString="";
                while(current){
                    listString +=current.data+" ";
                    current=current.next;
                }
                return listString;
            }
            //insert方法
            LinkedList.prototype.insert=function(position,data){
                //越界判断
                if(position<0||position>this.length) return false;
                
                var newNode=new Node(data);
                //1.插入position=0
                if(position==0){
                   //先把第一个赋值给新指针
                    newNode.next=this.head;
                    this.head=newNode;
                }else{
                    var index=0;
                    var previous=null;
                    //从第一个开始找
                    current=this.head;
                    while(index++<position){
                      previous=current;
                      current=current.next;
                    }
                    //包含最后一个元素 此时position是提前一个的，为null，那么current就是null；
                    newNode.next=current;
                    previous.next=newNode;
                }
                this.length += 1;
            }
            //indexOf 返回找到的第一个值
            LinkedList.prototype.indexOf=function(element){
                var index=0;
                var current=this.head;
                //     while(element!=current.data){
                //         index+=1;
                //         current=current.next;
                //         if(current==null) break;
                //     }
                // if(index==this.length&&current==null){
                //     return -1;
                // }else{
                //     return index;
                // }
                while(current){
                    if(current.data==element){
                        return index;
                    }
                    current=current.next;
                    index+=1;
                }
                return -1
            }
            //get（）
            LinkedList.prototype.get=function(position){
                //1.判断越界
                if(position<0||position>=this.length ) return null;
                //  2.获取对应data
               var current=this.head;
               var index=0;
               while(index<position){
                   index+=1;
                   current=current.next;
               }
               return current.data;
             }

        }
        //创建
        var list=new LinkedList()
        //测试append方法
        list.append("abc");
        list.append("ac");
        list.append("ab");
        //测试toString方法
        // console.log(list.toString())

        //测试indexOf
        console.log(list.indexOf('abc'))
        console.log(list.indexOf('ac'))
        console.log(list.indexOf('ad'))

        //insert方法
        list.insert(0,'haha')
        list.insert(1,'joanne')
        console.log(list.toString())

        //get方法
         console.log(list.get(0))
         console.log(list.get(1))
         console.log(list.get(2))
         console.log(list.get(3))
