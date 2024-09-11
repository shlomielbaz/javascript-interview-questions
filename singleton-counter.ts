
// implement a singletone class that handle shared counter
class Counter {
    private static instance: Counter;
    private static counter: number = 0;
    private constructor() {}

    static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance
    }

    increment(): void {
        Counter.counter = Counter.counter + 1;
    }

    decrement(): void {
        Counter.counter = Counter.counter - 1;
    }

    getCounter(): number {
        return Counter.counter;
    }
}

const c1 = Counter.getInstance();
const c2 = Counter.getInstance();

c1.increment()
c1.increment();
c1.increment();

c2.increment();
c2.increment();

console.log(c2.getCounter());
