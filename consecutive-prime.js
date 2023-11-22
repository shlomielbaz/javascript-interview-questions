/*
The prime 41, can be written as the sum of six consecutive primes:
2 + 3 + 5 + 7 + 11 + 13 = 41

This is the longest sum of consecutive primes that adds to a prime below one-hundred.
The longest sum of consecutive primes below one-thousent that adds to a prime, contains 21 terms and is equal to 953.
Which prime, below one-milion, can be written as a sum of the most consecutive primes?
*/

const isPrime = (num) => {
    if (num < 2) {
        throw new Error('minimum value is 2')
    }
    let pivot = num - 1;
    
    while(pivot >= 2) {
        if (num%pivot == 0) {
            return false;
        }
        pivot = pivot - 1;
    }
    return true;
}


const consecutivePrime = (limit, pivot = 2) => {
    const arr = [];
    let max = 0;
    let list = [];

    while(pivot < limit) {
        if (isPrime(pivot)) {
            arr.push(pivot);

            const sum = arr.reduce((a,b) => a+b);

            if (sum < limit && isPrime(sum)) {
                list = [...arr];
                max = sum;
            }
        }
        pivot = pivot + 1;
    }

    console.log('List is: ', list, ' Sum: ', max)
}
