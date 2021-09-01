///
/// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再触发则会重新计算；
///
function debounce(fn, delay = 200) {
  let timer;
  const func = function() {
    const context = this;
    const args = Array.prototype.slice.call(arguments);
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return func;
}

// const func = debounce(function(args) {
//   console.log(args);
// }, 300);
// func(321);
// setTimeout(() => {
//   func(321321);
// }, 400);


function debounce2(fn, delay = 200, immediate) {
  let timer;
  const func = function () {
    const context = this;
    const args = Array.prototype.slice.call(arguments);
    timer && clearTimeout(timer);
    if (immediate) {
      let canRun = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      canRun && fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  }
  func.cancel = function () {
    timer && clearTimeout(timer);
    timer = null;
  }
  return func;
}
const func2 = debounce2(function(args) {
  console.log(args);
}, 300, true);
func2(321);
func2.cancel();
setTimeout(() => {
  func2(321321);
}, 400);