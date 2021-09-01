/// es5实现
function unique(arr) {
  return arr.filter(function(item, index, array){
    return array.indexOf(item) === index;
  });
}

/// es6实现
const unique = arr => [...new Set(arr)];