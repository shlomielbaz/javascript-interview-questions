
function promisify(func) {
    return function(...args) { 
      return new Promise((resolve, reject) => {      
        func(...args, (err, result) => {
          if (err) {
            return reject(err)
          }
          resolve(result)
        })
      });
    }
  }
  
  function divide(a, b, callback) {
    if (b === 0) {
      return callback('divide by 0 is not allow')
    }
    callback(null , a/b)
  }
  
  promisify(divide)(6,2).then(result => {
    console.log('result should be equal to 3');
    console.log('result: ', result)
    if (result !== 3) {
      console.error('katashshshsh');
    }
  })
  
  promisify(divide)(3,0).catch(err => {
    console.log('err: ', err)
  })
