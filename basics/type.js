function type(obj) {
  // return Object.prototype.toString.call(obj);
  // return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  return Object.prototype.toString.call(obj).match(/\[object (.*?)\]/)[1].toLowerCase();
}
[
  'Null', 
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp'
].forEach(function(t) {
  type['is' + t] = function(obj) {
    return type(obj) === t.toLowerCase();
  }
});


// console.info(type(x))
console.info(type(1))
console.info(type("str"))
console.info(type(true))
console.info(type(undefined))
console.info(type(null))
console.info(type(Symbol(1)))
console.info(type({}))
console.info(type([]))
console.info(type(Math))
console.info(type(new Date()))
console.info(type(function(){}))
console.info(type())
console.info(type(/abcd/))