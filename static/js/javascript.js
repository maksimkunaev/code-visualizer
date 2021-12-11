const astTreeNode = document.querySelector('.ast-tree');
const traverseNode = document.querySelector('.traverse');
const sourceCodeNode = document.querySelector('.source-code');

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
      'Content-Type': 'application/json'
    },
  });
  return await response.json()
}

function submit() {
	postData('/api/parse-ast', { sourceCode: sourceCodeNode.value })
	  .then((data) => {
			renderASTTree(data.data.ast.program.body, astTreeNode)
			renderASTTree(data.data.traverse, traverseNode)
	  });
}

function renderASTTree(ast, parentNode) {
	parentNode.innerHTML = ''
	const ul = document.createElement('ul');

	const nodes = ast.map(node => {
	 	const li = document.createElement('li');

		li.textContent = `${node.type}`;

		if (node.name) {
			 li.textContent += ` | ${node.name}`
		}
		
		return li;
	})

	ul.append(...nodes)
	
	parentNode.append(ul);
}

const button = document.querySelector('button')
button.addEventListener('click', submit)