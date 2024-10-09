// function addNumber(num) {
//   console.log('prototype-makar')
//   this.num = num
//   return num++
// }

//console.log(addNumber.prototype)

// function foo() {
//   console.log('foo1')
// }

// foo() // 输出 'foo1'

// function foo() {
//   console.log('foo2')
// }

//foo() // 输出 'foo2'

/*
let sit = 200
function xoo() {
  let get = 300
  console.log('xoo: sit = ', sit)
  console.log('xoo: get = ', get)
  return function xoo2() {
    console.log('xoo: sit = ', sit)
    console.log('xoo: get = ', get)
  }
}
const out = xoo()

out()
*/

// 下面是coursera的2单元的测试
/*
任务 1：Code 一个函数声明
您需要编写名为addTwoNums 的函数声明，
该函数接受数字a 和b 以及控制台日志a + b 。

任务 2：使用数字和字符串调用addTwoNums 函数
您需要使用以下参数调用addTwoNums ：5 和"5" 。

任务 3：使用 try...catch 块更新addTwoNums 函数
在函数定义的主体中添加 try 和 catch 块。
目前，只需确保a + b 的控制台日志位于 try 块内。
此外，catch 块应捕获名为err 的错误，在catch 块的主体内
需要控制台记录err 的值。

任务 4：如果传入的参数不是数字，则抛出错误
如果传入addTwoNums 的参数中任何一个不是数字，就会抛出错误。

具体来说，用以下逻辑编写一个条件代码：

如果typeof 的a 参数不等于'number' ，则抛出一个新的ReferenceError 。
在ReferenceError 中，
传递一个自定义的错误信息'the first argument is not a number' 。

else if thetypeof theb parameter is not equal to'number', 
throw a newReferenceError.在ReferenceError 中，
传递一个自定义的错误信息'the second argument is not a number' 。

否则，控制台日志a + b 

完成此任务后，try 块内的所有代码都将位于这些条件语句内。

任务 5：更新 catch 代码块
在 catch 块内，将代码从console.log(err) 更新为console.log("Error!", err) 。

任务 6：调用addTwoNums 函数
使用5 和"5" 作为参数调用addTwoNums 函数。

任务 7：在调用的addTwoNums 函数下添加另一个控制台日志
添加另一行代码，控制台记录字符串"It still works" 。
*/

/*
const dic = {
  "a":32
}
function addTwoNums(a,b) {
  console.log(a + b);
}

addTwoNums(8,9)

try {
  addTwoNums(5,"5")
} catch (error) {
  console.log("is err");
}
console.log(typeof("we"));
console.log(typeof(2));
console.log(typeof(["we",12]));
console.log(typeof(dic));

var num = 44.2321
console.log(num.toPrecision(6));

//函数式编程测试

function calculator(operation) {
  if (operation === 'add') {
    return function(a, b) {
      return a + b;
    };
  } else if (operation === 'subtract') {
    return function(a, b) {
      return a - b;
    };
  } else if (operation === 'multiply') {
    return function(a, b) {
      return a * b;
    };
  } else if (operation === 'divide') {
    return function(a, b) {
      return a / b;
    };
  } else {
    return function() {
      return 'Invalid operation';
    };
  }
}

// 使用返回的函数进行计算
const addFunction = calculator('add');
console.log(addFunction(2, 3)); // 输出: 5

const subtractFunction = calculator('subtract');
console.log(subtractFunction(5, 2)); // 输出: 3

const multiplyFunction = calculator('multiply');
console.log(multiplyFunction(4, 3)); // 输出: 12

const divideFunction = calculator('divide');
console.log(divideFunction(10, 2)); // 输出: 5

const invalidFunction = calculator('invalid');
console.log(invalidFunction()); // 输出: 'Invalid operation'

var back = "funfufnufn";
console.log("bdbdb: ${back}");

*/
// 下面是js第二单元的测试
/*
// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontSize,txt) {
  let message = "%c" + txt;
  let style = `color: ${color};`;
  style = `background: ${background}`;
  style = `font-size: ${fontSize};`;
  console.log(message,style);
}
consoleStyler()
// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  if (typeof reason === "string") {
      let fontStyle = "color: tomato; font-size: 50px";
      if (reason == "birthday") {
          console.log(`%cHappy birthday`, fontStyle);
      }else if (reason == "champions") {
          console.log(`%cCongrats on the title!`, fontStyle);
      } else {
          console.log("Message not recognized", fontStyle);
      }
  } else {
      console.log("reason is not str");
  }
  
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color,background,fontSize,txt,reason) {
  consoleStyler(color,background,fontSize,txt)
  celebrateStyler(reason)
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
*/

//下面是oop的接收参数的测试
/*
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();

console.log(area); // 输出 50

class train {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  pri() {
    console.log(this.a,this.b,this.c);
  }
}
const tomasi = new train(88,99,77);
console.log(tomasi,typeof(tomasi));
*/
//下面是js第三单元的说明和测试
//说明
/*
# 实验说明：面向对象编程
> ### **提示：开始之前**
> #### **要并排查看代码和说明**，请在 VSCode 工具栏中选择以下内容：
> - 查看 -> 编辑器布局 -> 两
> - 要在预览模式下查看此文件，请右键单击此 README.md 文件并选择“打开预览”
> - 在代码树中选择您的代码文件，它将在新的 VSCode 选项卡中打开它。
> - 将您的评估代码文件拖到第二列。
> - 做得好！您现在可以同时查看说明和代码。
> - 有关于使用 VSCode 的问题？请在此处查看我们的支持资源：
> [Coursera 上的 Visual Studio Code](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **运行 JavaScript 代码**
> - 选择 JavaScript 文件
> - 选择 V​​SCode 右上角工具栏中的“运行代码”按钮。
> 例如：它看起来像一个三角形的“播放”按钮。

## 任务 1：编写 Person 类
编写 Person 类，构造函数中有三个参数：name、age 和 energy。
在 Person 类中设置默认参数，如下所示：
```
name = "Tom"
age = 20
energy = 100
```
在 `Person` 类中编写两个方法。将这些方法命名为 `sleep()` 和 `doSomethingFun()`。
`sleep()` 方法应采用现有的能量水平并将其增加 10。
doSomethingFun() 方法应采用现有的能量水平并将其减少 10。
## 任务 2：编写 Worker 类
编写一个继承自 `Person` 类的子类，并将其命名为 `Worker`。
`Worker` 类在构造函数中有两个附加参数：
- xp（表示“经验值”）
- hourlyWage。
这些属性设置为以下默认值：
```
xp = 0
hourlyWage = 10
```
`Worker` 类具有其超类的所有参数和方法。
此外，它还具有 `goToWork()` 方法，该方法每次运行时都会将 `xp` 属性的值增加 10。
## 任务 3：编写实习对象
在函数中实例化 `Worker` 类以编写新的实习对象。
应具有以下特征：
```
姓名：Bob
年龄：21
能量：110
xp：0
hourlyWage：10
```
在实习对象上运行 `goToWork()` 方法。然后 `return` 实习对象。
## 任务 4：编写经理对象
在经理函数中实例化 `Worker` 类以编写新的 `manager` 对象。
管理器对象应具有以下特征：
```
名称：Alice
年龄：30
能量：120
xp：100
hourlyWage：30
```
*/
// task one
/*
class Person {
  constructor(name = 'Tom',age = 20,energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun(){
    this.energy -= 10;
  }
}
// task two
class Worker extends Person {
  constructor(name,age,energy,xp = 0,hourlyWage = 10) {
    super(name,age,energy)
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork(){
    this.xp += 10;
  }
}
// task three
function intern() {
  const newWorker = new Worker("Blob",21,110,0,10);
  newWorker.goToWork();
  return newWorker;
}
// task four
function manager() {
  const newWorker = new Worker("Alice",30,120,100,30);
  newWorker.doSomethingFun();
  return newWorker;
}
let val = `hello
world
?
`
console.log(val);
*/
//下面是第四单元的测试
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
  for (const arr of dairy) {
    console.log(arr);
  }
}
logDairy()
// Task 2
const animal = {
  canJump:true
}
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  const dic_key = Object.keys(bird);
  for (const i of dic_key) {
    console.log(`${i}: ${bird[i]}`);
  }
}
birdCan()
//Task 3
function animalCan() {
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}
animalCan()

const [one,two,...three] = dairy;
console.log(one,two,three);

