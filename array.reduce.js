

Array.prototype.reducer = function(func, init) {
    if (func instanceof Function) {
        let acc = init || null;
        
        const context = this;

        for (const item of context) {
            acc = func.call(context, acc, item)
        }

        return acc
    }
    throw new Error('invalid arguments')
}


console.log([1,2,3,4].reducer((a, b) => a + b))



  