class Future {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    handler(this.resolve, this.reject);
  }

  resolve(value) {
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.value = value;
      this.onFulfilledCallbacks.forEach((fn) => fn(value));
    }
  }

  reject(value) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.value = value;
      this.onRejectedCallbacks.forEach((fn) => fn(value));
    }
  }

  then(onFulfilled, onRejected) {
    return new Future((resolve, reject) => {
      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onFulfilled(this.value);
            if (fulfilledFromLastPromise instanceof Future) {
              fulfilledFromLastPromise.then(resolve, reject);
            } else {
              resolve(fulfilledFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            const rejectedFromLastPromise = onRejected(this.value);
            if (rejectedFromLastPromise instanceof Future) {
              rejectedFromLastPromise.then(resolve, reject);
            } else {
              reject(rejectedFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.status === "fulfilled") {
        try {
          const fulfilledFromLastPromise = onFulfilled(this.value);
          if (fulfilledFromLastPromise instanceof Future) {
            fulfilledFromLastPromise.then(resolve, reject);
          } else {
            resolve(fulfilledFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (this.status === "rejected") {
        try {
          const rejectedFromLastPromise = onRejected(this.value);
          if (rejectedFromLastPromise instanceof Future) {
            rejectedFromLastPromise.then(resolve, reject);
          } else {
            reject(rejectedFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  }

  static all(promises) {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Promises must be an array"));
    }

    return new Future((resolve, reject) => {
      const results = new Array(promises.length);
      let counter = 0;

      promises.forEach((promise, index) => {
        promise.then((value) => {
          results[index] = value;
          counter = counter + 1;

          if (counter === promises.length) {
            resolve(results);
          }
        });
      });
    });
  }
}

const onFulfilled1 = (res) => {
  console.log(res);
  return new Future((resolve, reject) => {
    setTimeout(() => resolve(res + " resolved second one"), 1000);
  });
};

const onFulfilled2 = (res) => {
  console.log(res);
};

const handler1 = (resolve, reject) => {
  setTimeout(() => resolve("resolved first one"), 1000);
};

const handler2 = (resolve, reject) => {
  setTimeout(() => resolve("resolved first two"), 1000);
};

// testing code
let p1 = new Future(handler1);
let p2 = new Future(handler2);

//p1.then(onFulfilled1).then(onFulfilled2);

Future.all([p1, p2]).then((value) => {
  console.log(value);
});

// 1 sec later, 'resolved first one'
// 1 sec later, 'resolved second one'
