/*
* 
*  Lowest common ancestor (LCA)
*  You are given references to two nodes in a binary tree.
*  Find the root of the smallest subtree that contains both nodes. (one node may be an ancestor of another, in *which case this node is the solution)
*
*                      a
*                     / \
*                    /   \
*                   b     c
*                  / \   / \  
*                 z  w  e   d 
*                           /\
*                          j  k
*
*  LCA(b, c) = a
*  LCA(d, k) = d
*  LCA(w, d) = a
*  LCA(j, c) = c
*/

const createNode = (name) => ({
  name,
  children: []
});

const addChildren = (node, children) => {
  node.children = children;
};

//                  0    1    2    3    4    5    6    7    8 
const nodeNames = ['a', 'b', 'c', 'z', 'w', 'e', 'd', 'j', 'k'];

const nodes = nodeNames.map(name => createNode(name));
addChildren(nodes[0], [nodes[1], nodes[2]]); // a
addChildren(nodes[1], [nodes[3], nodes[4]]); // b

addChildren(nodes[2], [nodes[5], nodes[6], nodes[9]]); // c
addChildren(nodes[6], [nodes[7], nodes[8]]); // d

const root = nodes[0];

const findPath = (root, targetNode, call, path) => {
  path = path || [];
  
  if (root === targetNode) {
    path.push(root.name)
    return path
  }
  
  root && path.push(root.name)
  root && root.children && root.children.forEach(x => {
    return findPath(x, targetNode, path)
  });
  
  return path
}



function LCA(root, a, b) {
  if (!a ||  !b) {
    return 'PROVIDED INVALID NODES'
  }
  
  let pathToA;
  let pathToB;
      
  findPath(root, a, (res) => {
    pathToA = res
  });
  
  findPath(root, b, (res) => {
    pathToB = res
  });
  
  let target;
  
  for (let idx = 0; idx < pathToA.length; idx++) {
    if (pathToA[idx] !== pathToB[idx]) {
      break;
    }
    target = pathToA[idx]
  }
  
  return target;
}

console.log('The lowest common ancestor (LCA) is: ', LCA(root, nodes[1], nodes[0]));
