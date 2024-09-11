// Implement a data structure that supports two functions for a stream of integers:

// addNumber(int num): Adds a number to the stream.
// getAverage(): Returns the average of the last 100 numbers added to the stream. If fewer than 100 numbers have been added,
// return the average of all the numbers."

class AvarageFixedLengthArray {
  private nums: number[] = [];
  private idx: number = 0;
  private limit: number = 10;

  addNumber(num: number) {
    this.nums[++this.idx % this.limit] = num;
  }

  getAverage() {
    const len = this.nums.length;
    const total = this.nums.reduce((acc, item) => acc + item);

    return total / len;
  }

  print() {
    console.log("current index: ", this.idx);
    console.log(`the last ${this.limit} items int the array: ${this.nums}`);
    console.log(`the avarage of the array is: ${this.getAverage()}`);
  }
}

const nums = [];

const n = new AvarageFixedLengthArray();
n.addNumber(3);
n.addNumber(4);
n.addNumber(5);
n.addNumber(3);
n.addNumber(5);
n.addNumber(5);
n.addNumber(3);
n.addNumber(5);
n.addNumber(5);
n.addNumber(3);
n.addNumber(5);
n.addNumber(5);
n.addNumber(3);
n.addNumber(5);
n.addNumber(1);
n.addNumber(7);
n.addNumber(15);
n.addNumber(1);
n.addNumber(1);
n.print();
