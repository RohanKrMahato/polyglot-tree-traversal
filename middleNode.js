const { metacall, metacall_load_from_file } = require('metacall');
metacall_load_from_file('c', ['leaf_Node.c']);

function traverse_middleNode(currentNode){

	metacall('leaf_node',2*currentNode);
	
	process.stdout.write(currentNode.toString());
	process.stdout.write(" ");
	
	metacall('leaf_node',2*currentNode+1);
	
}

module.exports=traverse_middleNode;
