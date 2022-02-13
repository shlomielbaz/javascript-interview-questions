
// what output the following block throw?
(() => {
    console.log(1);
    
    setTimeout(function(){console.log(2)}, 1000); 

    setTimeout(function(){console.log(3)}, 0);
    
    console.log(4);
})();

/*
-- output:

  1 -> non-async
  4 -> non-async
  3 -> async starts immidiatlly
  2 -> async starts after one second

-- explantion:

  the V8 will execute accordingly the non-async processes first, 
  then he will execute the asyncs processes according the time that pass to the setTimout process

*/

// what output the following block throw?
(() => {
    const startTime = new Date();
  
    console.log(1);
  
    setTimeout(() => console.log(2), 2500);
  
    while (new Date() - startTime < 3000) { }
  
    setTimeout(() => console.log(3), 1000);
  
    setTimeout(() => console.log(4), 0);
  
    console.log(5);
})()

/*
-- output:
  1 -> non-async
  5 -> non-async
  4 -> async
  2 -> async
  3 -> async

-- explantion:

  1. the V8 will execute accordingly the non-async processes first.
  2. before the wait block (while) the V8 push async process with 2.5 seconds time to execute.
  3. the '2' will printed right after the wait even the time to execute bigger then the processes after wait block, It turns out that the execution time starts on the push to the queue, therefore, it will printed first.
  
*/
