/// reverse string but not the words without using any temporary variable,
//  'Hello Guys, How are you' => you are How Guys, Hello

function reverse(arr, start, end) {
  const pivot = (start + end) / 2;
  for (let i = start; i < pivot; i++) {
    [arr[i], arr[end - 1 - (i - start)]] = [arr[end - 1 - (i - start)], arr[i]];
  }
}

const reverseWords = function (s) {
  const words = s.split("");
  reverse(words, 0, words.length);

  let start = 0;
  let i = 0;

  for (const word of words) {
    if (word == " ") {
      reverse(words, start, i);
      start = i + 1;
    }

    i = i + 1;
  }

  reverse(words, start, i);
  return words.join("");
};

console.log(reverseWords("Hello Guys, How are you"));
