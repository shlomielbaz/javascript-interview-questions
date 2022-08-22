/*
Given a tree:

           [1]
          / | \
       [2] [3] [4]
            |
           [5]
          /   \
        [6]   [7]
       /   \    \
     [8]   [9]  [10]
     
write a method which receive the root of the tree, and print its nodes in order of level.               

Write also the class which represent a node of the tree

For example, the output of the method when received the following tree is 

1 2 3 4 5 6 7 8 9 10
*/


const printTree = function (node) {

    if (node !== null) {
        console.log(node.data);
    }

    if (node.children) {
        let queue = [];

        for (let idx = 0; idx < node.children.length; idx++) {
            const item = node.children[idx];
            console.log(item.data);

            if (item.children) {
                queue = queue.concat([...item.children])
            }
        }
        if (queue.length > 0) {
            for(const item of queue) {
                printTree(item);
            }
        }
    }
};

const tree = {
    data: 1,
    children: [
        { data: 2 },
        {
            data: 3, children: [
                {
                    data: 5, children: [
                        {
                            data: 6, children: [
                                { data: 8 },
                                { data: 9 }
                            ]
                        },
                        {
                            data: 7, children: [
                                { data: 10 }
                            ]
                        }
                    ]
                }
            ]
        },
        { data: 4 }
    ]
};

printTree(tree);
