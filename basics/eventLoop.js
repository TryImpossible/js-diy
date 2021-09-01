///
/// 执行栈、宏任务、微任务
///

// let a = () => {
//   setTimeout(() => {
//     console.log('任务队列函数1')
//   }, 0)
//   for (let i = 0; i < 3; i++) {
//     console.log('a的for循环')
//   }
//   console.log('a事件执行完')
// }
// let b = () => {
//   setTimeout(() => {
//     console.log('任务队列函数2')
//   }, 0)
//   for (let i = 0; i < 3; i++) {
//     console.log('b的for循环')
//   }
//   console.log('b事件执行完')
// }
// let c = () => {
//   setTimeout(() => {
//     console.log('任务队列函数3')
//   }, 0)
//   for (let i = 0; i < 3; i++) {
//     console.log('c的for循环')
//   }
//   console.log('c事件执行完')
// }
// a();
// b();
// c();
// ///
// /// a的for循环 -> a的for循环 -> a的for循环 -> a事件执行完 -> 
// /// b的for循环 -> b的for循环 -> b的for循环 -> b事件执行完 -> 
// /// c的for循环 -> c的for循环 -> c的for循环 -> c事件执行完 -> 
// /// 任务队列函数1 -> 任务队列函数2 -> 任务队列函数3
// ///





// setTimeout(function() {
//   console.log('timeout1');
// })
// new Promise(function(resolve) {
//   console.log('promise1');
//   for(var i = 0; i < 1000; i++) {
//       i == 99 && resolve();
//   }
//   console.log('promise2');
// }).then(function() {
//   console.log('then1');
// })
// console.log('global1');
// ///
// /// promise1 -> promise2 -> global1 -> then1 -> timeout1
// ///





// console.log('golb1');
// setImmediate(function() {
//     console.log('immediate1');
//     process.nextTick(function() {
//         console.log('immediate1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate1_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate1_then')
//     })
// })
// ///
// /// glob1 -> immediate1 -> immediate1_promise -> immediate1_nextTick -> immediate1_then
// ///





// setTimeout(function() {
//   console.log('timeout1');
//   process.nextTick(function() {
//       console.log('timeout1_nextTick');
//   })
//   new Promise(function(resolve) {
//       console.log('timeout1_promise');
//       resolve();
//   }).then(function() {
//       console.log('timeout1_then')
//   })
// })
// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })
// setTimeout(function() {
//     console.log('timeout2');
//     process.nextTick(function() {
//         console.log('timeout2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout2_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout2_then')
//     })
// })
// process.nextTick(function() {
//     console.log('glob2_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob2_promise');
//     resolve();
// }).then(function() {
//     console.log('glob2_then')
// })
// setImmediate(function() {
//     console.log('immediate2');
//     process.nextTick(function() {
//         console.log('immediate2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate2_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate2_then')
//     })
// })
// ///
// /// glob1_promise -> glob2_promise -> glob1_nextTick -> glob2_nextTick -> glob1_then -> glob2_then ->
// /// timeout1 -> timeout1_promise -> timeout1_nextTick -> timeout1_then ->
// /// timeout2 -> timeout2_promise -> timeout2_nextTick -> timeout2_then ->
// /// immediate2 -> immediate2_promise -> immediate2_nextTick -> immediate2_then
// ///





// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');
// ///
// /// script start -> script end -> promise1 -> promise2 -> setTimeout
// ///





// // async function async1() {
// //   console.log("async1 start");
// //   await async2();
// //   console.log("async1 end");
// // }
// // async function async2() {
// //   console.log("async2");
// // }
// async function async1() {
//   console.log("async1 start");
//   Promise.resolve(async2()).then(() => console.log("async1 end"));
// }
// async function async2() {
//   console.log("async2");
// }
// async1();
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
// ///
// /// async1 start -> async2 -> promise1 -> script end -> promise2 -> async1 end -> timeout
// /// async1 start -> async2 -> promise1 -> script end -> async1 end -> promise2 -> timeout
// ///





// console.log('1');
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })
// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
// ///
// /// 1 -> 7 -> 6 -> 8 -> 2 -> 4 -> 3 -> 5 -> 9 -> 11 -> 10 -> 12
// ///





// (function test() {
//   setTimeout(function() {console.log(4)}, 0);
//   new Promise(function executor(resolve) {
//       console.log(1);
//       for( var i=0 ; i<10000 ; i++ ) {
//           i == 9999 && resolve();
//       }
//       console.log(2);
//   }).then(function() {
//       console.log(5);
//   });
//   console.log(3);
// })()
// ///
// /// 1 -> 2 -> 3 -> 5 -> 4
// ///





// console.log('golb1');
// setImmediate(function() {
//     console.log('immediate1');
//     process.nextTick(function() {
//         console.log('immediate1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate1_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate1_then')
//     })
// })
// setTimeout(function() {
//     console.log('timeout1');
//     process.nextTick(function() {
//         console.log('timeout1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout1_then')
//     })
//     setTimeout(function() {
//     	console.log('timeout1_timeout1');
//       process.nextTick(function() {
//           console.log('timeout1_timeout1_nextTick');
//       })
//       setImmediate(function() {
//         console.log('timeout1_setImmediate1');
//       })
//     });
// })
// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })
// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })
// ///
// /// golb1 -> glob1_promise -> glob1_nextTick -> glob1_then -> 
// /// timeout1 -> timeout1_promise -> timeout1_nextTick -> timeout1_then -> 
// /// immediate1 -> immediate1_promise -> immediate1_nextTick -> immediate1_then ->
// /// timeout1_timeout1 -> timeout1_timeout1_nextTick -> timeout1_setImmediate1
// ///





// // TIP: 为了容易辨别起名为p1（p开头 里面打印1）
// process.nextTick(function() {         // --------> 被放微任务列表
//   console.log('1');                   //          微任务列表记为：【p1】
// })

// new Promise(function (resolve) {
//   console.log('2');                   // --------> 直接执行
//   resolve();                          //          目前打印顺序为：2
// }).then(function () {                 // --------> 整体的then被放进微任务列表[包含其中的setTimeout 4]
//   console.log('3');                   //          微任务列表记为：【p1 t34】
//   setTimeout(function () {
//     console.log('4')
//   });
// });

// setTimeout(function () {              // --------> 被放宏任务列表
//   console.log('5')                    //          宏任务列表记为：【s5】
// });

// new Promise(function (resolve) {
//   setTimeout(function () {            // --------> 被放宏任务列表
//     console.log('6')                  //          宏任务列表记为：【s5 s6】
//   });
//   resolve()
// }).then(function () {                 // --------> 整体的then被放进微任务列表[包含其中的setTimeout和其中的多层嵌套]
//   setTimeout(function () {            //          微任务列表记为：【p1 t34 t789】
//     console.log('7')
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         console.log('8')
//       });
//       resolve()
//     }).then(function () {
//       setTimeout(function () {
//         console.log('9')
//       });
//     });
//   });
// });
// console.log('10')                      // --------> 直接执行
//                                        //          目前打印顺序为：2、10
// /// 2 -> 10 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7 -> 8 -> 9




// console.log('outer');
// setTimeout(() => {
//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('setImmediate');
//   });
// }, 0);
// ///
// /// outer -> setImmediate -> setTimeout
// /// 





// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }
// console.log(new Date, i);
// ///
// /// 5 -> 5,5,5,5
// ///





// for (var i = 0; i < 5; i++) {
//   (function(j) {  // j = i
//       setTimeout(function() {
//           console.log(new Date, j);
//       }, 1000);
//   })(i);
// }
// console.log(new Date, i);
// ///
// /// 5 -> 0,1,2,3,4
// ///





// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }
// console.log(new Date, i);
// ///
// /// 报错，let块级作用域
// ///





// for (var i = 0; i < 5; i++) {
//   (function(j) {
//       setTimeout(function() {
//           console.log(new Date, j);
//       }, 1000 * j);  // 这里修改 0~4 的定时器时间
//   })(i);
// }
// setTimeout(function() { // 这里增加定时器，超时设置为 5 秒
//   console.log(new Date, i);
// }, 1000 * i);
// ///
// /// 0,1,2,3,4,5
// ///





// const tasks = [];
// const output =(i) => {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(new Date, i);
//         resolve();
//       }, 1000 * i);
//   });
// }
// for (var i = 0; i < 5; i++) {
//   tasks.push(output(i));
// }
// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i);
//   }, 1000);
// });
// ///
// /// 0,1,2,3,4,5
// ///




// const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
// (async () => {
//   for (var i = 0; i < 5; i++) {
//     await sleep(1000);
//     console.log(new Date, i);
//   }
//   await sleep(1000)
//   console.log(new Date, i);
// })();
// ///
// /// 0,1,2,3,4,5
// ///



// Promise.resolve().then(() => {
//   console.log('mm');
//   Promise.resolve().then(() => {
//     console.log('xx');
//   }).then(() => {
//     console.log('yy');
//   });
// }).then(() => {
//   console.log('nn');
// });
// ///
// /// mm -> xx -> nn -> yy
// ///


// for(let a = 0;a<3;a++){
// 	new Promise((resolve,reject)=>{
// 		resolve("123")
// 	}).then(res=>{
// 		console.log("异步任务",res)
// 	})
// 	console.log("同步",a)
// }
// ///
// /// 同步0 -> 同步1 -> 同步2 -> 异步任务123 -> 异步任务123 -> 异步任务123
// ///



// const p = Promise.resolve('Hello');
// p.then(function (s) {
//   console.log(s)
// });
// setTimeout(function () {
//   console.log('three');
// }, 0);
// Promise.resolve().then(function () {
//   console.log('two');
// });
// console.log('one');
// ///
// /// one -> Hello -> two -> three
// ///


console.log('outer');

setTimeout(() => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  });
}, 0);


