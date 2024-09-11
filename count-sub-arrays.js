
/*
Given an array of numbers (num),
return the number of subarrays filled with 0
*/
// example 1:
console.log(countSubArrays([ 1, 3, 0, 0, 2, 0, 0, 4 ])); // 6
/*
Explanation:
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0.
Therefore, we return 6.
*/

// example 2:
console.log(countSubArrays([ 0, 0, 0, 2, 0, 0 ])); // 9

// 1 -> 1
// 2 -> 3
// 3 -> 6
// 4 -> 10
// 5 -> 15
// 6 -> 21

/*
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0.
Therefore, we return 9.
*/

console.log(countSubArrays([ 0, 2, 0, 0 ])); // 4

console.log(countSubArrays([ 0, 2, 0, 0, 0, 0, 0, 0 ])); // 22

function countSubArrays(nums) {
    let result = 0;
    let counter = 0;
    
    for(const item of nums) {
      if (item === 0) {
        result += (++counter);
      }
      else {
        counter = 0;
      }
    }
    return result;
}