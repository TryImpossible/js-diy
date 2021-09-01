Array.prototype.forEach2 = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this); // this 就是当前的数组
  const len = O.length >>> 0;
  let k = 0;
  while(k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
}
const forEachArr = [1,2,3,4,5];
forEachArr.forEach2((value, index, array) => {
  console.log(`value is ${value}, index is ${index}, array is ${array}`);
});



Array.prototype.map2 = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const obj = Object(this);
  const len = obj.length >>> 0;
  let k = 0;
  let arr = [];
  while(k < len) {
    arr.push(callback.call(thisArg, obj[k], k, obj));
    k++;
  }
  return arr;
}
const mapResult = [1,2,3,4,5].map2((value, index, array) => {
  console.log(`value is ${value}, index is ${index}, array is ${array}`);
  return value * 2;
});
console.log('result is ' + mapResult);



Array.prototype.filter2 = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const obj = Object(this);
  const len = obj.length >>> 0;
  let k = 0;
  let arr = [];
  while(k < len) {
    if (callback.call(thisArg, obj[k], k, obj)) {
      arr.push(obj[k]);
    }
    k++;
  }
  return arr;
}
const filterResult = [1,2,3,4,5].filter2((value, index, array) => {
  console.log(`value is ${value}, index is ${index}, array is ${array}`);
  return value % 2 === 0;
});
console.log('result is ' + filterResult);



Array.prototype.some2 = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }

  const obj = Object(this);
  const len = obj.length >>> 0;
  let i = 0;
  while( i < len) {
    if (callback.call(thisArg, obj[i], i, obj) === true) {
      return true;
    } else {
      i++;
    }
  }
}
const someResult = [1,2,3,4,5].some2((value, index, array) => {
  console.log(`value is ${value}, index is ${index}, array is ${array}`);
  return value === 1;
});
console.log('result is ' + someResult);


Array.prototype.reduce2 = function(callback, initialValue) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }

  let obj = Object(this);
  let len = obj.length >>> 0;
  let i = 0;
  let result = initialValue;
  if (initialValue == undefined || initialValue == null) {
    i = 1;
    result = obj[0];
  }
  while(i < len) {
    result = callback.call(this, result, obj[i], i, obj);
    i++;
  }
  return result;
}
const reduceResult = ['a','b','c','d','e'].reduce2((previousValue, currentValue, currentIndex, array) => {
  console.log(`previousValue is ${previousValue}, currentValue is ${currentValue}, currentIndex is ${currentIndex}, array is ${array}`);
  return previousValue += currentValue;
});
console.log('result is ' + reduceResult);
