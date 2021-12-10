// const fs = require("fs");
// const fileName = "/Users/maxim/private/code-visualizer/source/main.js";

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);



console.log(generate(ast, {}, code))
// traverse(ast, {
//   enter(path) {
// 	// console.log(Object.keys(path.node.type))
// 	console.log(path.node.type, path.node.name)

// 	console.log('\n')

//     // if (path.isIdentifier({ name: "n" })) {
//     //   path.node.name = "x";
//     // }

//     return false;
//   },
// });