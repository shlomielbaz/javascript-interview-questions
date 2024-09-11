


const message2 = () => {
    console.log('Message 2') // Synchronize
    return Promise.resolve('DONE 2') // Asynchronize
}

const message1 = () => {
    console.log('Message 1') // Synchronize
    return new Promise((resolve) => {
        setTimeout(() => { resolve('DONE 1') }, 0); // Asynchronize)
    })
}

const print = async () => {
    console.log('Print 1') // Synchronize 3
    console.log(await message1());
    console.log('Print 2') // Synchronize
    console.log(await message2());
    console.log('Print 3') // Synchronize
};

// Main
console.log('Main 1') // Synchronize 1
setTimeout(() => { console.log('Main DONE 1') }, 0); // Asynchronize)
print() // Synchronize 2
setTimeout(() => { console.log('Main DONE 2') }, 0); // Asynchronize)
console.log('Main 2') // Synchronize 4


// Print 1
// Print 3
// Message 1
// Print 2
// DONE 1
// Print 4
// Message 2
// DONE 2
// Print 5