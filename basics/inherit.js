// /// 原型链继承
// /// 原型链继承存在的问题：
// /// 问题一：原型中包含的引用类型属性将被所有实例共享
// /// 问题二：子类在实例化的时候不能给父类构造函数传递参数 
// function Animal() {
//   this.colors = ['black', 'white']
// }
// Animal.prototype.getColor = function() {
//   return this.colors;
// }
// function Dog() {}
// Dog.prototype = new Animal();
// let dog1 = new Dog();
// dog1.colors.push('brown');
// let dog2 = new Dog();
// console.info(dog2.colors);





// /// 借用构造函数实现继承
// /// 解决原型继承的问题：引用类型共享问题和传参问题
// /// 但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法
// function Animal(name) {
//   this.name = name;
//   this.getName = function() {
//     return this.name;
//   }
// }
// function Dog(name) {
//   Animal.call(this, name);
// }





// /// 组合继承
// /// 组合继承结合我原型链和盗用构造函数，将两者的优点集中了起来。基本的思路就是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
// /// 这样既可以把方法定义在原型上实现重用，又可以让每个实例拥有自己的属性。
// function Animal(name) {
//   this.name = name;
//   this.colors = ['black', 'white'];
// }
// Animal.prototype.getName = function() {
//   return this.name;
// }
// function Dog(name, age) {
//   Animal.call(this, name);
//   this.age = age;
// }
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;
// let dog1 = new Dog('奶昔', 2);
// dog1.colors.push('brown');
// let dog2 = new Dog('哈赤', 1);
// console.log(dog2) 





/// 寄生式组合继承
function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}
Animal.prototype.getName = function() {
  return this.name;
}
function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
let dog1 = new Dog('奶昔', 2);
dog1.colors.push('brown');
let dog2 = new Dog('哈赤', 1);
console.log(dog2) 




/// class实现继承
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Dog extends Animal{
  constructor(name, age){
    super(name);
    this.age = age;
  }
}