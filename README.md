# data-structure
js数据结构和算法
+ [栈](#栈的常见操作)
+ [队列](#队列常见操作)
+ [链表](#链表)
## 栈的常见操作
+ push():添加一个新元素到栈顶
+ peek():返回栈顶的元素，不对栈做任何修改
+ isEmpty():如果栈里没有任何元素就返回true，否则返回false
+ size():返回栈里的元素个数（和数组length很像）
+ toString():将栈结构的内容以字符串形式返回
实现这六个函数:
```js
        function Stack() {
            //栈中的属性
            this.items = []
                //栈的相关操作
                //1.将元素压入栈
            Stack.prototype.push = function(el) {
                    this.items.push(el)
                }
                //2.从栈中取出元素
            Stack.prototype.pop = function() {
                    return this.items.pop()
                }
                // 3.查看栈顶元素
            Stack.prototype.peek = function() {
                    return this.items[this.items.length - 1]
                }
                // 4.判断栈是否为空
            Stack.prototype.isEmpty = function() {
                    return this.items.length === 0
                }
                // 5.返回栈元素个数
            Stack.prototype.size = function() {
                    return this.items.length
                }
                // 6.将栈结构以字符串形式输出
            Stack.prototype.toString = function() {
                //join创建一个字符串副本
                return this.items.join(",")
            }
        }
        // 使用栈
        var stack = new Stack()
```
应用：十进制转二进制
```js
function decToBin(number) {
            var s = new Stack()
            while (number > 0) {
                s.push(number % 2)
                    // 将整除的结果作为下一次的被除数,取整
                number = Math.floor(number / 2)
            }
            // 取出元素
            var binary = '';
            while (!s.isEmpty()) {
                binary += s.pop()
            }
            return binary
        }
        console.log(decToBin(100))
```

## 队列常见操作
+ enqueue(element)：向队尾添加一个或多个新的项。
+ dequeue():移除队列的第一项，返回被移除的元素。
+ front():返回队列中第一个元素。队列不变，只返回信息。
+ isEmpty():如果队列中不包含任何元素，返回true，否则返回false
+ size():返回队列包含元素个数
+ toString():将队列中的内容转成字符串形式

## 链表
```
数组：
缺点：
1、需要申请连续空间；不满足时要扩容；
2、在开头和中间插入数据成本很高，需要大量位移；
```
链表优点：
+ 链表可以不是连续空间，实现内存动态管理
+ 不必在创建时确定大小，可无限延伸
+ 插入和删除时，时间复杂度可以达到O（1）

链表封装：
```js
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

        }
```
链表常见操作：
+ append(element):尾部添加；
+ insert(position,element)：指定位置添加
+ get(position):获取对应位置的元素
+ indexOf(element):返回元素在列表中的索引，没有返回-1；
+ update(position):修改某个位置元素
+ removeAt(position):从某个特定位置除移一项;
+ remove(element)：除移一项；
+ isEmpty():不包含任何元素返回true;大于0返回false；
+ size();返回链表包含元素个数;
+ toString():由于列表项使用了Node类，就需要重写继承自js对象的toString方法，让其只输出元素的值；