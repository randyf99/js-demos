// Destructuring parameters
function foo([a, b, c] = []) {
  console.log(a, b, c);
}

function baz ({a, b, c} = {}) {
  console.log(a, b, c);
}

// console.log(foo(1, 2, 3)); // Generates a type error
console.log(foo([1, 2, 3]));
console.log(baz({
  a: 1,
  b: 2,
  c: 3
}));
