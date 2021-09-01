// https://zhuanlan.zhihu.com/p/92894937
var Person = function(name) {}
var person1 = new Person();
var person2 = new Person();
person1.name = "Will";
Person.prototype.sayName = function() {
  console.log("My name's " + this.name);
}
// 对象person1和person2的隐式原型指向其构造函数Person
console.log('person1.__proto__:', person1.__proto__); // Person { sayName: [Function] }
console.log('person2.__proto__:', person2.__proto__); // Person { sayName: [Function] }

// 函数Person也是一个特殊对象，其隐式原型__proto__指向其构造函数Function
console.log('Person.__proto__:', Person.__proto__); // function () { [native code] }

// 函数Person的原型prototype指向原型对象(包含实例的共享属性和方法)
console.log('Person.prototype:', Person.prototype); // Person { sayName: [Function] }

// Person.prototype保存着实例的共享方法，有一个指针constructor指回构造函数
console.log('Persion.prototype.constructor:', Person.prototype.constructor);

console.log('对象并不具有prototype属性，只有函数才具有prototype属性');
console.log('person1.prototype:',person1.prototype);
console.log('person2.prototype:',person2.prototype);
console.log('person2.constructor:',person2.constructor);

/// 总结：
/// 1.对象有属性__proto__，指向该对象构造函数的原型对象
/// 2.方法除了有属性__proto__，还有属性prototype，prototype指向该方法的原型对象