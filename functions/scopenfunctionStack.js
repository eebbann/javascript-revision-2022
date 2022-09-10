for (let i = 0; i < node.childNodes.length; i++) {
	walkTree(node.childNodes[i]);
}