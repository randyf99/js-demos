// Template Strings
// function foo(strings, ...values) {
//   var str = '';
//   for(let i = 0; i < strings.length; i++) {
//     if (i > 0) str += values[i-1];
//     str += strings[i];
//   }
//   console.log(str);
//   return str;
// }

function foo(strings, ...values) {
  var str = '';

  for(let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i-1] == 'number') {
        str += values[i-1].toFixed(2); // xxx.xx
      } else {
        str += values[i-1];
      }
    }

    str += strings[i];
  }

  return str;
}

var name = 'Randy';
var orderNumber = '123';
var total = 319.7;

var msg = foo`Hello, ${name}, your
order (#${orderNumber} was $${total}.)`;

console.log(msg);
