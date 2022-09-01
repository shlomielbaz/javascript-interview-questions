// assume n is known and you have an array of n length while the array items are 0 to n-1.
// our array is not sorted.
n=5;
arr = [3,4,0,2,1];

// imaging a mouse came and eat one of the array items, when mouse eats item is set to zero
//  after the mouse eat one item our array looks like the following:
arr = [3,4,0,0,1] --> (2)

// our task is to know what item was eatten?

// solution #1 - Dictionary + Scan
// 1. loop over the array items and set each item as a dictionary key.
// 2. loop over n and check each index is exist in the dictionary keys.
// complexity:
// - Runtime: O(n)
// - Space: O(n)

// solution #2 - Sort + Scan
// Sort the array and then check if the next item is greater in 1 from the current item, if not, the current item + 1 item is eatten
// complexity:
// - Runtime: O(nlogn)
// - Space: O(1)

// solution #3 - Math Operation
// sum(orginal) - sum(current) = eatten item 
// complexity:
// - Runtime: O(n)
// - Space: O(1)

// now, what if the mouse ate two items?
// after the mouse eat two items our array looks like the following:
arr = [0,4,0,0,1] --> (3, 2)

// in this case we don't need to modufy nothing in Solution #1 and Solution #2

// solution #3 - Math Operation
// mul(orginal) / mul(current) = X, Y
// complexity:
// - Runtime: O(n)
// - Space: O(1)

// a prove:
1 * 2 * 3 * 4
-------------- = 2 * 3
1 *         4


