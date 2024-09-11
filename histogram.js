


const histogram = (list, n) => {
    const first = list[0];
    const last = list[list.length - 1];
    const groupSize =  Math.round((last - first) / n);
    const result = Array(n).fill(0);

    for(const element of list) {
        const group = parseInt((element - first) / groupSize);

        console.log(((element - first) / groupSize), group);

        result[group]++;
    };

    console.log(`Histogram Results: [${result.join(',')}]`);
}

const arr = [2,4,5,6,7,11,15,20,21,22,23,24,25]
histogram(arr, 3)




