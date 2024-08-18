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
