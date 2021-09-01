// const p = new Promise(resolve => {
//   resolve(1)
// });
// p.then(() => console.info('123'))
// console.info(Promise.resolve(1).then(() => console.log("async1 end")))

// function test() {}
// console.log(test.prototype)
// console.log(test.__proto__)
// function Test() {}
// console.log(Test.prototype)
// console.log(Function.prototype)
// console.log(Array.prototype)
// console.log(Object.prototype)
// console.log(Date.prototype)
// console.log(Error.prototype)

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const name = 'Lydia';
// const age = 21;
// getPersonInfo`${name} is ${age} years old`;

// const myMap = new Map();
// const myFunc = () => 'greeting';
// myMap.set(myFunc, 'Hello World!');
// //1
// console.log(myMap.get('greeting'));
// //2
// console.log(myMap.get(myFunc));
// //3
// console.log(myMap.get(() => 'greeting'));

// const add = x => y => z => {
//   console.log(x, y, z);
//   return x + y + z;
// }


// function add2(x) {
//   return function(y) {
//     return function(z) {
//       console.log(x, y, z);
//       return x + y + z;
//     }
//   }
// }

// console.log(add(4)(5)(6));
// console.log(add2(4)(5)(6));

// class Counter {
//   constructor() {
//     this.count = 0;
//   }
//   increment() {
//     this.count++;
//   }
// }

// const emojis = [1,2,3,4];
// console.log(emojis.push(6));
// console.log(emojis.splice(0, 2));
// console.log(emojis.length = 0);

function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
    console.log('----', arr);
  }
  return arr;
}
const a = [1, [2, [3, 4]]];
console.log(flatten(a));


