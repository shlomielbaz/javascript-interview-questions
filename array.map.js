

Array.prototype.map = function(func) {
    if (func instanceof Function) {
        const array = Array.of(this.length).fill(null);
        const context = this;
        
        for (let i = 0; i < this.length; i++) {
            array[i] = func.call(context, this[i]);
        }
        
        return array;
    }
    throw new Error('invalid arguments')
}


console.log([1,2,3,4].map((a) => a * 2))



  