/* Given two sorted arrays, find the number of elements in common. The arrays are
 the same length and each has all distinct elements */

 function findCommon(arr1, arr2) {
   // Brute force solution
   var result = [];
   for(let i = 0; i < arr1.length; i++) {
     for(let j = 0; j < arr.length; j++) {
       if (arr1[i] === arr2[j]) {
         result.push(arr1[i]);
       }
     }
   }
 }

 function findCommon(arr1, arr2) {
   // Brute force solution
   var result = [];
   for(let i = 0; i < arr1.length; i++) {
     if (arr2.indexOf(arr1[i]) !== -1) {
       result.push(arr1[i]);
     }
   }
 }

 function findCommon(arr1, arr2){
   var arrayTotal = arr1.concat(arr2);
   console.log(arrayTotal);
   var arraySinDuplicados = arrayTotal.filter(function(elem, pos) {
     return arrayTotal.indexOf(elem) == pos;
  });
  console.log(arraySinDuplicados);
}


 console.log(findCommon([13, 27, 35, 40, 49, 55, 59], [17, 35, 39, 40, 55, 58, 60]));
 // => [35, 40, 55]
