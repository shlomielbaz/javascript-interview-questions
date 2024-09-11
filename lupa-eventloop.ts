async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

const p1 = new Promise<string>( (resolve) => {
  console.log("promise1");
  resolve("promise2");
})

Promise.resolve(() => {
  console.log("promise3");
})

new Promise<string>( (resolve) => {
  console.log("promise1");
  resolve("promise4");
}).then(data => {
  console.log(data);
})

console.log("script end");

Promise.all([p1]).then(data => {
  console.log(data)
})





// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
