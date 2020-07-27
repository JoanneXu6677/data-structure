# data-structure
js数据结构和算法

## 栈的常见操作
+ push():添加一个新元素到栈顶
+ pop():除移栈顶的元素，返回被除移的数
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



