// Gather and spread operators

// Variadic functions
// function foo() {
//   // make arguments into an array
//   var args = [].slice.call(arguments);
//   // pass a first value
//   args.unshift(42);
//   args.push(19);
//
//   // pass arguments as individual values
//   return args;
// }

// REST or gather operator
// function bar(...args) {
//   console.log(args);
// }
//
// function baz(...args) {
//   // spread operator
//   bar(42, ...args);
//   console.log(args);
// }
//
// console.log(baz(1,2,3,4));

// var x = [1, 2, 3];
// var y = [4, 5];
// var z = [0].concat(x, y, [6]);
//
// console.log(z);

// var a = [0, ...x, ...y, 6];
// console.log(a);

function fooA(x, y, ...rest) {
  return rest;
}

var a = [1, 2, 3];
var b = [4, 5, 6];

console.log(fooA(...a, ...b));

var str = 'Hello';

console.log([...str]);

function caz(str) {
  return [...str];
}

console.log(caz('Hello'));
