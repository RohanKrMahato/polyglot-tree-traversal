from metacall import metacall, metacall_load_from_file

metacall_load_from_file('node', ['middleNode.js']);

currentNode=1;

metacall('traverse_middleNode',2*currentNode);
print(currentNode," ",end="",flush=True)
metacall('traverse_middleNode',2*currentNode+1);
