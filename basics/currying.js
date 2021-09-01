// function createCurry(fn) {
//   let args = [];
//   const func = function() {
//     const _args = Array.prototype.slice.call(arguments);
//     args = args.concat(_args);
//     console.log('args', args);
//     if (args.length < fn.length) {
//       return func;
//     }
//     return fn.apply(null, args);
//   }
//   return func;
// }

function createCurry(func, args) {
  var argity = func.length;
  var args = args || [];
  
  return function () {
    var _args = [].slice.apply(arguments);
    args.push(..._args);
    
    if (args.length < argity) {
      return createCurry.call(this, func, args);
    }
    
    return func.apply(this, args);
  }
}


function add(a, b, c) {
  return a + b + c;
}
// console.log(add(1,2,3));
let addCurry = createCurry(add);
console.log(addCurry(1)(2)(3));
let addCurry2 = createCurry(add);
console.log(addCurry2(1,2)(3));

