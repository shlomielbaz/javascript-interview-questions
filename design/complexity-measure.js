// assume n is known and you have an array of n length while the array items are 0 to n-1.
// our array is not sorted.
n=5;
arr=[3,4,0,2,1];

// imaging a mouse came and eat one of the array items, after the mouse eating our array looks like the following:
arr=[3,4,0,0,1]

// our task is to know what item was eatten?

// Solution #1
// Define a dictionary when the dictionary keys are from zero to n-1, and then the missing key is the eatten item.
// - Runtime: O(n)
// - Space: O(n)

// Solution #2
// Sort the array and then check if the next item is greater in 1 from the current item, if not, the current item + 1 item is eatten

// Solution #3
