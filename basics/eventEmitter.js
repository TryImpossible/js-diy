class EventEmitter {
  constructor() {
    this.cache = {}
  }

  on(name, fn) {
    if (!this.cache[name]) {
      this.cache[name] = [];
    }
    this.cache[name].push(fn);
  }

  off(name, fn) {
    if (!this.cache[name]) return;
    const tasks = this.cache[name];
    if (tasks && !!tasks.length) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn);
      if (index > -1) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name, once = false, ...args) {
    if (!this.cache[name]) return;
    // 创建副本，如果回调函数内继续注册相同事件，会千万死循环
    const tasks = this.cache[name].slice();
    for (const fn of tasks) {
      // fn(...args);
      fn.apply(null, args)
    }
    if (once) {
      delete this.cache[name];
    }
  }
}


const eventBus = new EventEmitter();
const fn1 = function(name, age) {
  console.log(`${name} ${age}`);
}
const fn2 = function(name, age) {
  console.log(`hello, ${name} ${age}`);
}
eventBus.on('aaa', fn1);
eventBus.on('aaa', fn2);
eventBus.emit('aaa', false, '布兰', 12);