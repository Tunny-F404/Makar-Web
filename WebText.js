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