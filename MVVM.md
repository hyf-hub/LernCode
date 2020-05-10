

## MVC

​	全称 Mode View Controller 

+ View 传送指令到 Controller 		用户界面
+ Controller 再更改Mode里的数据  业务逻辑
+ Mode再发送数据到View 用户得到反馈	 数据保存

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200428083941482.png" alt="image-20200428083941482" style="zoom:50%;" />

### 互动模式

​	接受用户指令的时候MVC有两种方式 

+ 通过View传给Controller 	
+ 直接通过Controller接受指令

### Backbone

​	实际项目采用更灵活的方式	以BackBone为例

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200428084830918.png" alt="image-20200428084830918" style="zoom:50%;" />

+ 用户可以向View发送指令 view再要求Model更改里面的值
+ 用户也可以直接向Controller发送指令（改变URL或ChangeHash）再由Controller发送给View
+ Controller 非常薄 只起到路由的作用 而View非常厚 业务处理逻辑都在View里面 所以Backbone只留下了一个Router

## MVP

​	MVP模式将Controller改名为Presenter(发布者) 同时改变了通信方向

![image-20200428092014433](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200428092014433.png)

+ 各部分的通信都是双向的
+ View和Model不再通信 都通过Presenter传递
+ View非常薄 不处理任何业务逻辑 成为被动视图(Passive View) 即没有任何主动性 而Presenter非常厚 所有的业务处理逻辑都在那

## MVVM

​	MVVM将Presenter更名为Viewmodel 基本上与MVP一致

![image-20200428093557453](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200428093557453.png)

唯一区别是 它采用双向绑定 (data-binding) 当View发生变化时 自动映射在ViewMode上 反之亦然

> http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

