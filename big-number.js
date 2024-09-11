

function incrementArrayForm(arr, carry = 1) {
  const result = [];

  const len = arr.length - 1;
  
  for (let i = len; i >= 0 || carry > 0; i--) {
    const digit = i >= 0 ? arr[i] : 0;
    const sum = digit + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);    
  }

  return result;
}


let originalArray = [9,8];

console.log(originalArray)

originalArray = incrementArrayForm(originalArray)

console.log(originalArray)

originalArray = incrementArrayForm(originalArray)

console.log(originalArray)