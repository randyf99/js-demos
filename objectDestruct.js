// Object destructuring
// function foo() {
//   return {a: 1, b: 2, c: 3};
// }
//
// var tmp = foo()
// var a = tmp.a;
// var b = tmp.b !== undefined ? tmp.b : 42;
// var c = tmp.c;
//
// // ES6,
// var obj;
//
// var {
//   a = 10,
//   b: X = 42, // X is the target
//   c
// } = obj = foo() || {};

function foo() {
  return {
    a: 1,
    b: 2,
    c: 3,
    d: {
      e: 4
    }
  };
}

var obj;
var {
  a = 10,
  b: X = 42,  // X is the target
  c,
  d: X,
  d: Z,
  d: {
    e
  } = {}
} = obj = foo() || {};

console.log(obj);
