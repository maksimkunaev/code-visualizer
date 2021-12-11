const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const getParsedAST = code => {
  return parser.parse(code);
}

function getTraverse(code) {
  const traversedAst = [];

  traverse(getParsedAST(code), {
    enter(path) {
      traversedAst.push(path.node)

      // if (path.isIdentifier({ name: "n" })) {
      //   path.node.name = "x";
      // }

      return false;
    },
  });

  return traversedAst;
}


module.exports = {
  getParsedAST,
  getTraverse
};