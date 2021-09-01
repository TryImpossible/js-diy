// /// 函数节流：是确保函数特写的时间内至多执行一次
// function throttle(fn, delay = 200) {
//   let canRun = true;
//   return function(){
//     if (canRun) {
//       fn();
//       canRun = false;
//     }
//     setTimeout(() => {
//       canRun = true;
//     }, delay);
//   };
// }

// for (let i = 0; i < 10; i++) {
//   throttle(function() {
//     console.log(1);
//   }, 3000)();
// }


// function flat(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] instanceof Array) {
//       newArr = newArr.concat(flat(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(flat([1, [2, [3], 4], 5]))

///
/// 触发高频事件，且 N 秒内只执行一次
///
function throttle(fn, delay) {
  let lastTime = 0;
  const func = function() {
    let context = this;
    let args = Array.prototype.slice.call(arguments);
    const now = Date.now();
    if (now - lastTime > delay) {
      fn.apply(context, args);
      lastTime = now;
    }
  }
  return func;
}

// const func = throttle(function(args) {
//   console.log(args);
// }, 300);
// func(321);
// setTimeout(() => {
//   func(321321);
// }, 200);

function throttle2(fn, delay) {
  let lastTime = 0;
  const func = function() {
    let context = this;
    let args = Array.prototype.slice.call(arguments);
    const now = Date.now();
    if (now - lastTime > delay) {
      fn.apply(context, args);
      lastTime = now;
    }
  }
  func.cancel = function() {
    lastTime = Date.now();
  }
  return func;
}

const func2 = throttle2(function(args) {
  console.log(args);
}, 00);
func2(321);
func2.cancel();
setTimeout(() => {
  func2(321321);
}, 200);