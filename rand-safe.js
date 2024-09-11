/*
  we want to implment randNumbers function 
  which recives one param (n) of type number 
  and should print all the numbers 
  in the range of [0, n) in a random way
  we can use rand function (without implmenting it)  
*/
// const randNumbers = (n) => {
//     const arr = Array.from(Array(n), (_, index) => index);
//     let randomize = n;
  
//     for (let i = 0; i < n; i++) {
//       const r = rand(randomize);
//       const item = arr[randomize];
//       arr[randomize] = arr[r];
//       arr[r] = item;
//       randomize = randomize - 1;
//     }
  
//     return arr;
//   };

//   const randNumbers = (n) => {
//     const arr = Array.from(Array(n), (_, index) => index);
//     const result = [];

//     do {
//         const r = rand(arr.length);
//         result.push(arr[r]);
//         arr.splice(r, 1);
//     } 
//     while(arr.length > 0);
  
//     return result;
//   };



/*
 recives one param (x) of type number 
 and returns a random number 
 in the range of [0, x)

*/
const rand = (x) => {
  return Math.floor(Math.random() * x);
};

console.log(randNumbers(10));

//randNumbers(2)

// [0, 1]
// [1, 0]

//randNumbers(3)

//[0, 1, 2]
//[0, 2, 1]
//[1, 0, 2]
//[1, 2, 0]
//[2, 0, 1]
//[2, 1, 0]
