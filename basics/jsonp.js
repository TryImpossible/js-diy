const jsonp = ({url, params, callbackName}) => {
  const generateUrl = () => {
    let dataSrc = '';
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return url + dataSrc;
  }
  return new Promise(() => {
    const scriptEle = document.createElement('script');
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = data => {
      resolve(data);
      document.removeChild(scriptEle);
    }
  });
}

/// 服务端直接执行callbackName方法
/// 以nodejs为例
// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     console.log('index')
//     res.send({name:'John',age:18});
// })
// app.get('/callback=:cbk',function(req,res){
//     var bk = req.params.cbk
//     var vt = {name:'Tim',age:28,id:bk};
//     res.send(bk+'('+JSON.stringify(vt)+')');
// })
// app.listen(3000);