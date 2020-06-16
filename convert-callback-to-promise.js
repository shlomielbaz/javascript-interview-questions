// The following code shows how to convert treditional callback functions into async by using Promise

function add(callback, a, b) {
    console.log('add: ', a + b)
    callback(a + b);
}

function pow(callback, a) {
    console.log('pow: ', a * a)
    callback(a * a);
}

// ------------ proxy function call
addpromisefy = promisefy(add)
powpromisefy = promisefy(pow)

addpromisefy(4, 5);
powpromisefy(4);

// ------------ no proxies function call
promisefy(add)(8, 5)
promisefy(pow)(8)

function promisefy(func) {
  return function() {
    let proxy = arguments;
    return new Promise(function(resolve, reject) {
      // console.log('promisefy: ', ...proxy)
      func(resolve, ...proxy)
    })
   }
}
