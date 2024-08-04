# 原型链

- 在我学完js的时候第一个接触的就是原型链，那时我并不懂什么是继承，也不知道它的应用场景，为此头疼很长时间，好在我有学过C的指针<br>
- 下面我会用js的方法和C指针的方法来介绍下<br>
- 这些只是作为个人的学习见解，请以官方参考文档为主[MDN继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#%E7%BB%93%E8%AE%BA)

## 什么是原型链？

你可能会在MDN上面看见这样一些概念：

> 原型链是JS中的继承
> JS中只有一种对象结构
> 每个对象（Object）又有一个指向其他对象的私有属性（prototype）
> 第一次接触的时候可能会很蒙，特别是官方文档又是需要一定的基础才能看懂的情况下
> 现在我们用大白话来翻译它

#### 原型链就是WIN的文件管理

它有两个重要（常用）的操作

> 继承和属性共享 //prototype and constructor and **proto**
> 构造函数和实例化 //new() and class()
> 这两个分别对应
> 文件夹中的新建文件夹
> 文件夹的复制和粘贴
> Ok，这是它的基本概念，接下来我们来介绍下它的基本模型

## 函数模型

### 创建函数

![基础模块](https://i.postimg.cc/LsVtSGRN/basic-module.png)<br>
上图中有两个模块（青色和紫色），他们分别是function和object，我们在创建函数的时候实际创建的是青色的function，紫色的object是JavaScript为这个函数创建一个与函数相关联的特殊对象

#### 这个对象是用于存储该函数创建的对象实例的共享属性和方法的

同样，我们可以看见图上有prototype、constructor、**proto**三个属性，你可以把他们理解为有特殊指向的指针，function和object互相连接，是不是很像数据结构中的链表，下面这个例子可以很好的帮你理解这个概念

1. 构造函数

```js
function Person(name) {
  this.name = name
}
```

> Person 是一个构造函数。
> 当使用 new Person('Alice') 创建实例时，构造函数会被调用。
> this.name = name;: 这行代码将传入的 name 参数赋值给新创建的对象的 name 属性。this 代表当前正在被创建的对象实例。

2. 原型方法

```js
Person.prototype.sayHello = function () {
  console.log('Hello, ' + this.name)
}
```

> Person.prototype: 这是 Person 函数的原型对象。所有 Person 的实例都会继承这个原型对象上的属性和方法。
> sayHello 方法: 这是定义在 Person.prototype 上的方法。它可以被 Person 的所有实例调用。
> this.name: 在这个方法中，this 代表调用 sayHello 方法的 Person 实例。因此，this.name 会访问到实例的 name 属性。

3. 创建实例并调用方法

```js
const person1 = new Person('Alice')
person1.sayHello() // 输出: Hello, Alice
```

> new Person('Alice'): 这行代码创建了一个新的 Person 实例。Person 构造函数会被调用，将 name 属性设置为 'Alice'。
> person1.sayHello(): 这行代码调用了 person1 实例上的 sayHello 方法。由于 sayHello 方法定义在 Person.prototype 上，因此它可以被 >person1 调用。
> sayHello 方法: 执行时会输出 'Hello, Alice'，因为 this.name 是 'Alice'。

### 基础函数模型

上面已经说了函数的创建，下面来说说在函数创建之前会发生什么，在你运行一个项目的时候，JavaScript会创建很多个内置构造函数，其中就有`function function()`和`function Object`，当然，这两个内置的构造函数也是有自己的对象的，如下图：
![基础函数模块](https://i.postimg.cc/cH4QLTLZ/basic-module-two.png)<br>

### **proto**

我们已经了解了原型链的各个模块了，接下来让我们把它连起来吧，如下图：
![原型链构造图1](https://i.postimg.cc/MTP1MRnB/prototype-line-one.png)<br>
上图很明显的能看出各个模块、函数之间的关系，如果说prototype和constructor是连接函数和其对象的属性（指针）的话，那**proto**就是连接各个函数模块之间的属性（指针）

#### 当你访问一个对象的属性时，JavaScript 引擎首先检查对象本身是否具有该属性。如果对象本身没有这个属性，JavaScript 引擎会查找对象的原型，如果原型对象上也没有该属性，JavaScript 引擎会继续查找原型的原型，直到找到属性或到达原型链的末尾（即原型为 null）。

下面这个例子可以很好的帮你理解这个概念：

```js
const parent = {
  name: 'Parent',
  greet() {
    console.log('Hello from ' + this.name)
  }
}

const child = {
  name: 'Child'
}

// 设置 child 的原型为 parent
child.__proto__ = parent

console.log(child.name) // 输出: Child
child.greet() // 输出: Hello from Child

// 访问 parent 的属性
console.log(child.__proto__.name) // 输出: Parent
```

## 继承和属性共享

继承是对象间通过原型链继承属性和方法的机制。通过继承，一个对象可以访问另一个对象的属性和方法。
这一段直接用代码来展示会更加直观：

```js
// 定义一个父类对象
const Animal = {
  name: 'Animal',
  eat() {
    console.log(`${this.name} is eating.`)
  }
}

// 创建一个子类对象，继承自 Animal
const Dog = Object.create(Animal)
Dog.name = 'Dog'
Dog.bark = function () {
  console.log('Woof!')
}

console.log(Dog.name) // 输出: Dog
Dog.eat() // 输出: Dog is eating.
Dog.bark() // 输出: Woof!
```

在这个例子中，Dog 对象通过 Object.create(Animal) 继承了 Animal 对象的属性和方法。因此，Dog 可以访问 Animal 的 eat 方法，同时还定义了自己的 bark 方法。

## 构造函数和实例化

![原型链全图](https://i.postimg.cc/yxDcFdRb/prototype-line-all.png)<br>
构造函数是一个特殊的函数，用于创建和初始化对象。实例化是通过构造函数创建对象的过程。在 JavaScript 中，构造函数通常以大写字母开头，并通过 new 关键字来调用。
（大白话来说就是new一个函数，并将它的**proto**属性（指针）指向被new的那个函数的对象）
下面是一个实例，会帮你更好的理解这个概念：

```js
// 定义一个构造函数
function Animal(name) {
  this.name = name
}

// 添加方法到 Animal 的原型
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`)
}

// 创建一个实例
const dog = new Animal('Dog')

console.log(dog.name) // 输出: Dog
dog.eat() // 输出: Dog is eating.
```

在这个例子中，Animal 是一个构造函数，用于创建具有 name 属性的对象。Animal.prototype 上定义的 eat 方法可以被所有实例共享。
