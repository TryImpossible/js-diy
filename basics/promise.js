const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 构造器
  constructor(executor) {
    // 初始化state为等待态
    this.state = PENDING;
    // 成功的值
    this.value = undefined;
    // 失败的值
    this.reason = undefined;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放的数组
    this.onRejectedCallbacks = [];

    // 成功
    let resolve = (value) => {
      // state改变，resolve调用就会失败
      if (this.state == PENDING) {
        // resolve后，状态变为成功态
        this.state = FULFILLED;
        // 储存成功的值
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    // 失败
    let reject = (reason) => {
      // state改变，reject调用就会失败
      if (this.state == PENDING) {
        // reject后，状态变为失败态
        this.state = REJECTED;
        // 储存失败值
        this.reason = reason;
        // 一旦rejected执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    // 如果executor执行报错，立即执行reject
    try {
      executor(resolve, reject);  
    } catch (error) {
      reject(error); 
    }
  }

  then(onFulfilled, onRejected) {
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    // 声明返回的promise2
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        // 异步
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // resolvePromise函数，处理自己return的promise和默认的promise2的关系
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)    
          }
        }, 0);
      }
      if (this.state === REJECTED) {
        // 异步
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      // 当状态state为pending时
      if (this.state === PENDING) {
        // onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        // onRejected传入到成功数组
        this.onRejectedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    // 返回promise，完成链式
    return promise2;
  }

  catch(fn) {
    return this.then(null, fn);
  }

}

function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (x == promise2) {
    // reject报错
    return reject(new TypeError('Chaining cycle detected for promise')); 
  }
  // 防止多次调用
  let called;
  // x不是null,且x是对象或函数
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        // A+规定，声明then = x的then方法
        let then = x.then;
        // 如果then是函数，就默认是promise了
        if (typeof then === 'function') {
          // 就让then执行第一个参数是this  后面是成功的回调和失败的回调
          then.call(x, y => {
            // 成功和失败只能调一个
            if (called) return;
            called = true;
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject);
          }, err => {
            // 成功和失败只能调一个
            if (called) return;
            called = true;
            // 失败了就失败了
            reject(err)
          });
        } else {
          // 直接成功即可
          resolve(x);
        }
      } catch (error) {
        // 也属于失败
        if (called) return;
        called = true;
        // 取then出错了那就不要再继续执行了
        reject(error);
      }
  } else {
    resolve(x);
  }
}

// resolve方法
MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
}

// reject方法
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
}

// race方法
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
}

// all方法
MyPromise.all = function(promises) {
  let arr = [];
  let i = 0;
  function processData(index, data) {
    arr[index] = data;
    i++;
    if (i == promises.length) {
      resolve(arr);
    }
  }

  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(data => {
        processData(i, data);
      }, reject);
    }
  });
}

// const p = new MyPromise((resolve, reject) => {
//   resolve(1)
// });
// p.then(result => {
//   console.log('result1 is ' + result);
//   return MyPromise.resolve(2);
// }).then(result => {
//   console.log('result2 is ' + result);
// }).catch(error => {
//   console.log('error is ' + error);
// })

var p = new Promise(function(resolve, reject){
  console.log('执行')
  setTimeout(function(){
      resolve(2)
  }, 1000)
})
p.then(function(res){
  console.log('suc',res)
},function(err){
  console.log('err',err)
})