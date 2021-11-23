
// Write a function that gets an array and shuffle it


const arr = [1, 2, 3, 4, 5, 6, 8]

// using extra array
function shuffle (arr) {
    const stack = [];
  
    do {
        const index = parseInt(0 + Math.random() * (arr.length - 0))
        stack.push(arr.splice(index, 1)[0]);
    }
    while (arr.length > 0)
      
    return stack;
}

// without using extra array
function shuffle (arr) {
    let len = arr.length;
  
    do {
        let index = parseInt(0 + Math.random() * (len - 0))
        arr.push(arr.splice(index, 1)[0]);
    }
    while ((--len) > 0)
    
    return arr
}
