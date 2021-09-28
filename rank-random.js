// Task description: create function that return random number from 0 to 99 while some number have highr chance to be choose, for example:
// the chance to get 1 is 5%
// the chance to get 2 is 4%
// the chance to get 8 is 6%


// Explanation: each number have 1% rank, then, we should create an array of numbers from 0 to 99 and if a number have diferent rank, 
// the number should duplicate accordinally, e.g.:

const arr = [1,1,1,1,1,2,2,2,2,3,4,5,6,7,8,8,8,8,8,8,9,10...];

function rankRandom() {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
