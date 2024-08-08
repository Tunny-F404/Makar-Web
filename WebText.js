function addNumber(num) {
  console.log('prototype-makar')
  this.num = num
  return num++
}

console.log(addNumber.prototype)

function foo() {
  console.log('foo1')
}

foo() // 输出 'foo1'

function foo() {
  console.log('foo2')
}

foo() // 输出 'foo2'
