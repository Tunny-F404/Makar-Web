# 原型链

在我学完js的时候第一个接触的就是原型链，那时我并不懂什么是继承，也不知道它的应用场景，为此头疼很长时间，好在我有学过C的指针<br>
下面我会用js的方法和C指针的方法来介绍下<br>
这些只是作为个人的学习见解，请以官方参考文档为主[MDN继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#%E7%BB%93%E8%AE%BA)
## 什么是原型链？

你可能会在MDN上面看见这样一些概念：
> 原型链是JS中的继承
> JS中只有一种对象结构
> 每个对象（Object）又有一个指向其他对象的私有属性（prototype）
第一次接触的时候可能会很蒙，特别是官方文档又是需要一定的基础才能看懂的情况下
现在我们用大白话来翻译它
###### 原型链就是WIN的文件管理
它有两个重要（常用）的操作
> 继承和属性共享 //prototype and constructor and __proto__
> 构造函数和实例化 //new() and class()
这两个分别对应
> 文件夹中的新建文件夹
> 文件夹的复制和粘贴
Ok，这是它的基本概念，接下来我们来介绍下它的基本模型
## 函数模型
### 创建函数

![基础模块](/makar-web/public/picture/basic-module.png)
上图中有两个模块（青色和紫色），他们分别是function和object，我们在创建函数的时候实际创建的是青色的function，紫色的object是JavaScript为这个函数创建一个与函数相关联的特殊对象
同样，我们可以看见图上有prototype、constructor、__proto__三个属性，你可以把他们理解为有特殊指向的指针，
### 基础函数模型
### NULL
## 继承和属性共享
## 构造函数和实例化
7.24------未完待续···