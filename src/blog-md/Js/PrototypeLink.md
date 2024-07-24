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
###### 这个对象是用于存储该函数创建的对象实例的共享属性和方法的
同样，我们可以看见图上有prototype、constructor、__proto__三个属性，你可以把他们理解为有特殊指向的指针，function和object互相连接，是不是很像数据结构中的链表，下面这个例子可以很好的帮你理解这个概念
1. 构造函数
```js
function Person(name) {
  this.name = name;
}
```
>Person 是一个构造函数。
>当使用 new Person('Alice') 创建实例时，构造函数会被调用。
>this.name = name;: 这行代码将传入的 name 参数赋值给新创建的对象的 name 属性。this 代表当前正在被创建的对象实例。
2. 原型方法
```js
Person.prototype.sayHello = function() {
  console.log('Hello, ' + this.name);
};
```
>Person.prototype: 这是 Person 函数的原型对象。所有 Person 的实例都会继承这个原型对象上的属性和方法。
>sayHello 方法: 这是定义在 Person.prototype 上的方法。它可以被 Person 的所有实例调用。
>this.name: 在这个方法中，this 代表调用 sayHello 方法的 Person 实例。因此，this.name 会访问到实例的 name 属性。
3. 创建实例并调用方法
```js
const person1 = new Person('Alice');
person1.sayHello(); // 输出: Hello, Alice
```
>new Person('Alice'): 这行代码创建了一个新的 Person 实例。Person 构造函数会被调用，将 name 属性设置为 'Alice'。
>person1.sayHello(): 这行代码调用了 person1 实例上的 sayHello 方法。由于 sayHello 方法定义在 Person.prototype 上，因此它可以被 >person1 调用。
>sayHello 方法: 执行时会输出 'Hello, Alice'，因为 this.name 是 'Alice'。
### 基础函数模型

### NULL
## 继承和属性共享
## 构造函数和实例化
7.24------未完待续···