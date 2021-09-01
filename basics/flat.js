// /// es5实现
// /// [1, [2, [3]]].flat(2) ---> // [1,2,3]
// function flatten(arr) {
//   var result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else{
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// Array.prototype.flat = flatten(this);

// // console.log(flatten([1, [2, [3], 4], 5]))
// console.log([1, [2, [3], 4], 5].flat())



// es6实现
function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}
console.log(flatten([1, [2, [3], 4], 5]))