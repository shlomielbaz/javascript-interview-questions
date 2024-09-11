function arrayFlat(arr, result = []) {

    arr.forEach(el => {
        if (el instanceof Array) {
            return arrayFlat(el, result)
        }
        result.push(el);
    });

    return result;
}


console.log(arrayFlat([1,[2,3,[4,5,6,[7,8], [9]], [10]], [11]]))
