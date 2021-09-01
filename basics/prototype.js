/*
/// 普通对象与函数对象 
var o1 = {};
var o2 = new Object();
var o3 = new f1();

function f1(){};
var f2 = function(){};
var f3 = new Function('str', 'console.log(str)');

console.log(typeof Object); // function
console.log(typeof Function); // function

console.log(typeof f1); // function
console.log(typeof f2); // function
console.log(typeof f3); // function

console.log(typeof o1); // object
console.log(typeof o2); // object
console.log(typeof o3); // object
*/

/*
/// 构造函数
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.info(this.name);
  }
}
var person1 = new Person('Barry', 27, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');

console.log(person1.constructor, Person); // [Function: Person] [Function: Person]
console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true
// 实例的构造函数属性（constructor）指向构造函数
*/

/*
/// 原型对象
function Person() {}
Person.prototype.name = 'Barry';
Person.prototype.age = 27;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
  console.log(this.name);
}

var person1 = new Person();
person1.sayName(); // Barry

var person2 = new Person();
person2.sayName(); // Barry

console.log(person1.sayName === person2.sayName); // true
// 每个对象都有__proto__属性，但只有函数对象才有prototype属性
*/

// 原型对象（Person.prototype）是 构造函数（Person）的一个实例。

/*
function Person() {}
console.log(Person.prototype); // Person {}
console.log(typeof Person.prototype); // Object
console.log(typeof Function.prototype); // Function，这个特殊
console.log(typeof Object.prototype); // Object
console.log(typeof Function.prototype.prototype); //undefined
*/

//JS在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__的内置属性，用于指向创建它的构造函数的原型对象
// 所有函数对象的 __proto__ 都指向 Function.prototype，它是一个空函数（Empty function）

/*
function Person() {}
var person1 = new Person();

console.log(Person.prototype.constructor == Person); // true
console.log(person1.__proto__ == Person.prototype); // true
console.log(person1.constructor == Person); // true
console.log(Person.__proto__); // [Function]
// console.lof(Person.prototype.__proto__); // 报错
console.log(Object.__proto__) // [Function]
console.log(Object.prototype.__proto__) // null
*/

/*
var b = new Array();
console.log(b.constructor === Array); // true
console.log(b.__proto__ === Array.prototype); // true

var c = new Date();
console.log(c.constructor === Date); // true
console.log(c.__proto__ === Date.prototype); // true

var d = new Function();
console.log(d.constructor === Function); // true
console.log(d.__proto__ === Function.prototype); // true
*/

/*
person1.__proto__ 是什么？
Person.__proto__ 是什么？
Person.prototype.__proto__ 是什么？
Object.__proto__ 是什么？
Object.prototype__proto__ 是什么？

*/
