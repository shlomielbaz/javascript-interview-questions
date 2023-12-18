/*
Given an array Arr[] of size N, print all the subsets of the array.

Subset: A subset of an array is a tuple that can be obtained from the array by removing some (possibly all) elements of it

Example:

Input: N = 3, Arr = [1, 2, 3]
Output: {}
{1}
{1, 2}
{1, 2, 3}
{1, 3}
{2}
{2, 3}
{3}
Explanation: These are all the subsets that can be formed from the given array, it can be proven that no other subset exists other than the given output.


Input: N = 2, Arr = [2, 4]
Output: {}
{2}
{2, 4}
{4}
Explanation: These are all the subsets that can be formed from the given array, it can be proven that no other subset exists other than the given output.

*/

const getAllSubsets = (theArray) => theArray.reduce(
  (subsets, value) => subsets.concat(
    subsets.map((set) => [value,...set])
    ),[[]]
);


function getAllSubsets(array) {
  const subsets = [[]];

  for (const el of array) {
    const last = subsets.length-1;
    for (let i = 0; i <= last; i++) {
      subsets.push( [...subsets[i], el] );
    }
  }
  return subsets;
}
    
    
