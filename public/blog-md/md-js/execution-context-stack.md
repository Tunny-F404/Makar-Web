# 执行上下文栈

一般来说，程序是顺序执行的（一行行往下执行），但js是段执行的，他会根据函数的调用来一段段的执行函数

在了解什么是执行上下文之前，需要了解的东西之一就有执行上下文栈

先说一下执行上下文的概念：

在js编辑器在运行代码的时候，他会进行一个运行前的准备工作，这里的准备工作就叫执行上下文（execution context）

//很迷对不对，为什么叫执行上下文？为什么不叫程序前期准备？这就跟汽车的轮子不叫轮子，叫披萨一样，让人很难理解和联想

//NOW，咱用大白话来翻译一下（中译中）

## 执行上下文的概念

### 执行上下文

定义：每当代码在 JavaScript 中运行时，都会创建一个执行上下文。执行上下文包括了代码的变量、函数和当前的执行状态

比喻：可以理解为代码的工作台，提供了执行代码所需的环境和工具

//就像MC当中的物品合成台，你要制造工具就需要用它

### 执行上下文栈

定义：执行上下文栈是一个栈结构，管理着所有正在运行的执行上下文。当函数被调用时，新的执行上下文被推入栈中；当函数返回时，执行上下文从栈中弹出

比喻：可以理解为函数调用的硬件工作台，通过堆栈管理各个函数的执行状态，确保每个函数调用都在正确的上下文中运行，并在完成后清理

//就像你的电脑一样，你需要玩MC就需要用它

## 代码段划分

现在我们了解了基本概念，但我们前面也说了js执行代码是段执行，那它是怎么划分这个段的呢，咱先看主要的三种分类方式：

### 全局代码 (Global Code)

- 定义：

全局代码是指在任何函数、块或其他代码结构之外的代码。它定义了全局作用域中的变量和函数。

- 功能：

只有一个全局执行上下文，所有在全局范围内定义的变量和函数都属于这个上下文。

- 关系：

全局代码的执行上下文会在程序开始时创建，并包含全局变量和函数。

### 函数代码 (Function Code)

- 定义：

函数代码是指在函数内部定义的代码。每当函数被调用时，都会创建一个新的函数执行上下文。

- 功能：

包含函数的参数、局部变量、内部函数、this 值等。

- 关系：

每次函数被调用时，都会创建一个新的执行上下文，该上下文包含函数代码的变量对象和作用域链。

### eval 代码 (Eval Code)

- 定义：

eval 是一个特殊的 JavaScript 函数，用于动态地执行字符串中的 JavaScript 代码。

- 功能：

eval 执行的代码会在调用 eval 的上下文中创建一个新的执行上下文，并与当前上下文共享作用域链。

- 关系：

eval 代码的执行上下文会受到调用 eval 的上下文的影响，因此它可以访问调用上下文中的变量。

//eval在现在的js当中已经很少用了

## 实现

咱用一段代码来模拟一下执行上下文栈的流程

```js
// 全局上下文创建
var globalVar = 'global'

// 全局执行上下文
function globalFunction() {
  // 创建新的函数上下文
  var localVar = 'local'

  function innerFunction() {
    // 创建新的函数上下文
    var innerVar = 'inner'
    console.log(globalVar) // 访问全局上下文中的变量
    console.log(localVar) // 访问外部函数的变量
    console.log(innerVar) // 访问当前函数的变量
  }
  innerFunction() // 调用 innerFunction，创建新的执行上下文
}

globalFunction() // 调用 globalFunction，创建新的执行上下文
```

上面的实例中：

##### 全局上下文

在程序开始时创建，并在程序结束时销毁。

##### globalFunction 被调用时

创建了一个新的函数执行上下文，并将其推入栈中。

##### innerFunction 被调用时

创建了另一个函数执行上下文，并将其推入栈中。

##### innerFunction 执行完毕后

它的执行上下文从栈中弹出，释放内存。

##### globalFunction 执行完毕后

它的执行上下文也从栈中弹出。

<!-- 添加一条横线 -->
<div style='border-top: 1px solid black;'></div>

## 拓展

[栈（stack）](/Makar-Web/stack)

[执行上下文](/Makar-Web/execution-context)
