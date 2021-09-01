function render(template, data) {
  // 模板字符串正则
  const reg = /\{\{(\w+)\}\}/;
  // 判断模板里否有模板字符串
  if (reg.test(template)) {
    // 查找当前模板里第一个模板字符串的字段 
    const name = reg.exec(template)[1];
    // 将第一个模板字符串渲染
    template = template.replace(reg, data[name]);
    // 递归渲染并返回渲染后的结构 
    return render(template, data);
  }
  // 如果模板没有模板字符串则直接返回
  return template;
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: '布兰',
    age: 12
}
console.log(render(template, person)); // 我是布兰，年龄12，性别undefined
