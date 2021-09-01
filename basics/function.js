Function.prototype.call2 = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  // context = context || window;
  context = context || global;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}
console.log(Math.max.call2(null, 1,2,3));



Function.prototype.apply2 = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  // context = context || window;
  context = context || global;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}
console.log(Math.max.apply2(null, [1,5,3]));



Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  // context = context || window;
  context = context || global;

  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  const fNOP = function() {};
  const fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}
const a = Math.max.bind2(null, 1,5,3);
console.log(a(6));