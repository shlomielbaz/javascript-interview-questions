// Task description: create function that return unique random number between 0 to 100


const arr = [];

function uniqueRandom() {
  if (arr.length === 0) {
    for(let i = 0; i < 100; i++) {
      arr[i] = i;
    }
  }
  
  let idx = Math.floor(Math.random() * arr.length);
  let value = arr[idx];
  arr.splice(idx, 1);
  return value;
}

// Solution explanation: 
//  -- create an array contains values from 0 to 99, 
//  -- generat a random number limited to the array length, the number represent the array index, then
//  -- save the value from the array where the index found, then
//  -- remove the item from the array in the index place, then
//  -- return the value
