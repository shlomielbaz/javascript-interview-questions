
// In this exercise, you have to analyze records of temperature to find the closest to zero.
// Implement the function computeClosestToZero(ts)  which takes an array of temperatures  and returns the temperature closest to 0.
// Constraints:
// - If the array is empty, the function should return 0
// - 0 ≤&nbsp;<code>ts</code> size ≤ 10000
// - If two temperatures are equally close to zero, the positive temperature must be returned.</strong> For example, if the input is -5 and 5, then 5 must be returned.

function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    if (ts.length > 0) {
        const upToZero = [];
        const lessThenZero = []
        for(let item of ts) {
            if (item > 0) {
                upToZero.push(item)
            }
            else if (item < 0) {
                lessThenZero.push(item)
            }
            else {
                return 0;
            }
        }
        const val1 = Math.min(...upToZero);
        const val2 = Math.max(...lessThenZero);

        if (val1 > Math.abs(val2)) {
            return val2
        }
        return val1
    }
    
    return 0;
}
