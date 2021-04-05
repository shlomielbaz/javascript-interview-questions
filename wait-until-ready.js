// Giving the following code, modify MyClass so that functions myFunction1 and myFunction2 cane performed 
//    after and only after all the async operations in constructor are completed.

// Constraints:
// -- Only MyClass can modify 

// CAN'T CHANGE
function notifyUrls(item, callback) {
    asyncOperation(item).then((res) => {
        callback(res)
    })
}
//

class MyClass {
    constructor() {
        [URL1, URL2, URL3].forEach(item => notifyUrls(item, () => { }));
    }

    myFunction1() {
        // only start working when constructor finished notifying
        // ...
    }

    myFunction2() {
        // only start working when constructor finished notifying
        // ...
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// The solution:
class MyClass {
    isReady: Promise<any>;
    
    constructor() {
        const promises = [URL1, URL2, URL3].map(item => new Promise((resolve, reject) => {
            notifyUrls(item, (res) => resolve(res))
        }));
        this.isReady = Promise.all(promises);
    }

    async myFunction1() {
        await this.isReady
    }

    async myFunction2() {
        await this.isReady
    }
}
