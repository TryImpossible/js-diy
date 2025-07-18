const core = require('@babel/core'); //babel核心模块
const types = require('@babel/types'); // 用来生成或者判断节点的AST语法树的节点

const sourceCode = `
  //四种声明函数的方式
  function sum(a, b) {
    return a + b;
  }
  const multiply = function (a, b) {
    return a * b;
  };
  const minus = (a, b) => a - b;
  class Calculator {
    divide(a, b) {
      return a / b;
    }
  }
`;

const autoImportLogPlugin = {
  visitor: {
    // 用来保证此模块内一定会引入一个日志的模块
    Program(path, state) {
      let loggerId;
      // 遍历子节点
      path.traverse({
        ImportDeclaration(path) {
          const { node } = path;
          if (node.source.value === 'logger') {
            // 说明导入过了
            const specifiers = node.specifiers[0];
            loggerId = specifiers.local.name; // 取出导入的变量名赋值给loggerId
            path.stop(); // 找到了就跳出循环
          }
        },
      });
      if (!loggerId) {
        // 如果loggerId没有值，说明源代码中还没有导入此模块，需要我们手动插入一个import语句
        loggerId = path.scope.generateUid('loggerLib'); //防止冲突
        path.node.body.unshift(
          types.importDeclaration(
            [types.importDefaultSpecifier(types.identifier(loggerId))],
            types.stringLiteral('logger'),
          ),
        );
      }
      // 在state上面挂载一个节点 => loggerLib()
      // loggerId就是loggerLib，第二个参数【】代表执行该函数无传参
      state.loggerNode = types.expressionStatement(
        types.callExpression(types.identifier(loggerId), []),
      );
    },
    // 四种函数方式，这是插件能够识别的语法，这是四种函数的type
    FunctionDeclaration(path, state) {
      insertLogger(path, state);
    },
    FunctionExpression(path, state) {
      insertLogger(path, state);
    },
    ArrowFunctionExpression(path, state) {
      insertLogger(path, state);
    },
    ClassMethod(path, state) {
      insertLogger(path, state);
    },
  },
};

function insertLogger(path, state) {
  const { node } = path;
  if (types.isBlockStatement(node.body)) {
    // 如果是一个块级语句的话
    node.body.body.unshift(state.loggerNode); // 在语句的头部添加logger波函数节点
  } else {
    // 处理箭头函数，生成一个块级语句，在第一行中插入loggerNode，然后return 之前 的内容
    const newBody = types.blockStatement([state.loggerNode, types.returnStatement(node.body)]);
    // 替换老节点
    node.body = newBody;
  }
}

const targetSource = core.transform(sourceCode, {
  plugins: [autoImportLogPlugin], // 使用插件
});
console.log(targetSource.code);
