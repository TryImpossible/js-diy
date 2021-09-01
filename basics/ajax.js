const getJson = function(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('GET', url, false);
    // xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send();
  });
}


const url = 'https://fastmock.site/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list';
getJson(url).then(result => {
  console.log('result is ' + result);
}).catch(error => {
  console.error('error is ' + error);
})