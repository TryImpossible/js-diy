function parseParam(url) {
  // 将？后面的字符串取出来
  const paramsStr = /.+\?(.+)$/.exec(url)[1];
  // 将字符串以 & 分隔后存到数组中
  const paramsArr = paramsStr.split('&');
  const paramsObj = {};
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数

      // 分隔 key 和 value
      let [key, value] = param.split('=');
      // 解码
      value = decodeURIComponent(value);
      // 判断是否转数字 
      value = /^\d+$/.test(value) ? parseFloat(value) : value;
      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], value);
      } else {
        // 如果对象没有 key, 创建 key 并设置值
        paramsObj[key] = value;
      }
    } else { // 处理无 value 的参数 
        paramsObj[param] = true;
    }
  });
  return paramsObj;
}

const url = 'http://www.baidu.com?a=A&b=B&c=1&a=AA&flag';
console.log(parseParam(url));