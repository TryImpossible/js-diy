const core = require('@babel/core');

let sourceCode = `
const sum = (a, b) => {
    return a + b;
}
`;

const namePlugin = {
  visitor: {
    Identifier: (path) => {
      const { node } = path;
      if (node.name === 'sum') {
        node.name = 'add';
      }
    },
  },
};

const arrowFunctionPlugin = {
  visitor: {
    ArrowFunctionExpression: (path) => {
      let { node } = path;
      node.type = 'FunctionExpression';
    },
  },
};

let targetSource = core.transform(sourceCode, { plugins: [namePlugin, arrowFunctionPlugin] });
console.log(targetSource.code);
