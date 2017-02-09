// Destructuring
function foo() {
  return [1, 2, 3, 4, 6, 6, 7, 8];
}

 // var tmp = foo();
 // var a = tmp[2] !== undefined ? tmp[2] : 42;
 // var b = tmp[1];
 // var c = tmp[2];

var [a = 42, b, c, ...args] = foo() || [];

var o = {};
[o.a = 42, o.b, o.c, ...args] = foo() || [];

console.log(o);

// swapping
var x = 10, y = 20;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// Variable dumping
var z = [1, 2, 3];
var v;
// [v,v, ...z] = [0, ...z, 4];

[, , ...z] = [0, ...z, 4]
console.log(z);

// Nested Arrays
function baz() {
  return[1, 2, 3, [4, 5, 6]];
}

//var [a = 42, b, c, [d, ,e]] = baz();

var a, b;
var x = [a, b] = baz();

console.log(x);

// Chain destructuring
[,,, [c, d] ] = [a, b, ...args] = baz();

console.log(a, b);
console.log(c, d);
