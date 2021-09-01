function myNew(constructor, ...args) {
  // 创建一个空对象，继承构造函数的 prototype 属性
  const obj = Object.create(constructor.prototype);
  // 执行构造函数
  const result = constructor.apply(obj, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = myNew(Person, 'Barry', 28);
console.log(p);