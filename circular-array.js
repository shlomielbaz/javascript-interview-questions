


// Function to print the circular rotation of array 
function print(a, n, ind) {
    // Create an auxiliary array of twice size.
    let b = new Array(2 * n);
   
    // Copy the input array 'a' to the auxiliary array 'b' twice
    // so that we can rotate the array circularly
    for (let i = 0; i < n; i++) 
      b[i] = b[n + i] = a[i];
   
    // print from the `ind-th` index to the `(n+ind)th` index in the auxiliary array 'b'.
    let output = '';
    for (let i = ind; i < n + ind; i++)
      output += b[i] + ' ';
    console.log(output);
  }
   
  // Driver code 
  let a = ['A', 'B', 'C', 'D', 'E', 'F'];
  let n = a.length;
   
  // Call the function and pass the input array, its size, and the index to rotate.
  print(a, n, 3);




