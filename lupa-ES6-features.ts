/* 1. Implement ES6 features into object
   2. Return the value after 2s */
   const john = {
    name: "John",
    balance: 1500,
    deduct: function (amount: number) {
      this.balance -= amount;
      return `${this.name} has a balance of ${this.balance}`;
    },
  };
  
  console.log(john.deduct(500));




































  

// const john = {
//   name: "John",
//   balance: 1500,
//   deduct(amount: number) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       this.balance -= amount;
//       resolve(`${this.name} has a balance of ${this.balance}`) ;
//     } ,0);
//   })
// },
// };


// john.deduct(500).then((res) => console.log(res));