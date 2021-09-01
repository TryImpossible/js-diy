/// 浅拷贝，只考虑对象类型
function shallowCopy(obj) {
  if (typeof obj !== 'object') return;

  let newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}



/// 简单版深拷贝:只考虑普通对象属性，不考虑内置对象和函数
function deepClone(obj) {
  if (typeof obj !== 'object') return;

  let newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}



/// 复杂版深拷贝: 基于简单版的基础上，还考虑了内置对象比如Date、RegExp等对象和函数以及解决循环引用的问题
const isObject = target => (typeof target === 'object' || typeof target === 'function') && target != null;
function complexDeepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target;
  }
  // 获取当前值的构造函数:获取它的类型
  let constructor = target.constructor;
  if (/^(RegExp|Date)$/i.test(constructor)) {
    // 创建一个新的特殊对象(正则类|日期类)的实例
    return new constructor(target);
  }
  if (isObject(target)) {
    // 为循环引用的对象作标记
    map.set(target, true);
    const newTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        newTarget[key] = deepClone(target[key], map);
      }
    }
    return newTarget;
  } else {
    return target;
  }
}