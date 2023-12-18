# Javascript Interview Questions
<ol>
  
  <li>
    <b>Promisefy callback functions</b> - convert treditional callback functions into async using Promise.<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/convert-callback-to-promise.js">convert-callback-to-promise.js</a><br />
    Link to playground <a href="https://playcode.io/622328" target="_blank">https://playcode.io/622328</a>
    <br /><br />
  </li>
  
  <li>
    In this exercise, you have to analyze records of temperature to find the closest to zero.<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/compute-closest-to-zero.js">compute-closest-to-zero.js</a>
    <br /><br />
  </li>
  
  <li>
    Modify MyClass so that functions myFunction1 and myFunction2 cane performed after and only after all the async operations in constructor are completed.<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/wait-until-ready.js">wait-until-ready.js</a>
    <br /><br />
  </li>
  
  <li>
    Add new item to a LinkedList in a sorted way<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/add-sorted-to-linkedlist.ts">add-sorted-to-linkedlist.ts</a>
    <br /><br />
  </li>
  
  <li>
    Write a function that gets an array and shuffle it<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/array-shuffle.js">array-shuffle.js</a>
    <br /><br />
  </li>
  
  <li>
    Efficient way to count number of 1s in the binary representation of a number in O(1) if you have enough memory to play with. <br />
    This is an interview question I found on an online forum, but it had no answer. Can somebody suggest something, I cant think of a way to do it in O(1) time?<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/bit-counter.js">bit-counter.js</a>
    <br /><br />
  </li>
  
  <li>
    Write a function that checks if the math expression is valid<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/check-valid-math.js">check-valid-math.js</a>
    <br /><br />
  </li>
  
  <li>
    Create function that return unique random number between 0 to 100<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/unique-random-number.js">unique-random-number.js</a>
    <br /><br />
  </li>
  
  <li>
    JavaScript questions about currying. e.g. write a function that can be run like this fooFunc(3)(2).<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/currying.js">currying.js</a>
    <br /><br />
  </li>

  <li>
    Write a function isBalanced(str) that returns true if the string contains balanced curly-braces. otherwise, false.<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/is-balanced.js">is-balanced.js</a>
    <br /><br />
  </li>

  <li>
    Lowest common ancestor (LCA)<br />
    You are given references to two nodes in a binary tree.<br />
    Find the root of the smallest subtree that contains both nodes. (one node may be an ancestor of another, in *which case this node is the solution)<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/LCA.js">LCA.js</a>
    <br /><br />
  </li>

<li>
  N - represent number of lines,<br />
  A to K represent a seats mark (I excluded) of each line.<br /><br />

  The seats in the hall orgenized:<br />
  [ A | B | C ]&nbsp;&nbsp;&nbsp;[  D | E | F | G ]&nbsp;&nbsp;&nbsp;[  H | J | K ]<br /><br />


  Your task is write a solution the returns the combination of sequence of 4 seats,<br />
    the 'sequence' of 4 can be achived from:<br />
      2 seats from the left/right groups and 2 seats from the middle group or;<br />
      4 seats from the middle group, for example:<br />
      [ A | B | C ]&nbsp;&nbsp;&nbsp;[ D | E | F | G ]&nbsp;&nbsp;&nbsp;[ H | J | K ]<br />
      [ - | X | X ]&nbsp;&nbsp;&nbsp;[ X | X | - | - ]&nbsp;&nbsp;&nbsp;[ - | - | - ]<br />
      [ - | - | - ]&nbsp;&nbsp;&nbsp;[ X | X | X | X ]&nbsp;&nbsp;&nbsp;[ - | - | - ]<br />
      [ - | - | - ]&nbsp;&nbsp;&nbsp;[ - | - | X | X ]&nbsp;&nbsp;&nbsp;[ X | X | - ]<br /><br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/available-4-seats.js">available-4-seats.js</a>
    <br /><br />
</li>

<li>
  The prime 41, can be written as the sum of six consecutive primes:<br />
2 + 3 + 5 + 7 + 11 + 13 = 41<br /><br />

This is the longest sum of consecutive primes that adds to a prime below one-hundred.<br />
The longest sum of consecutive primes below one-thousent that adds to a prime, contains 21 terms and is equal to 953.<br />
Which prime, below one-milion, can be written as a sum of the most consecutive primes?<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/consecutive-prime.js">consecutive-prime.js</a>
    <br /><br />
</li>

<li>
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).<br /><br />

Examples:<br />
"the-stealth-warrior" gets converted to "theStealthWarrior"<br />
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"<br />
    Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/convert-to-camel-case.js">convert-to-camel-case.js</a>
    <br /><br />
</li>

<li>
event loop print ordering<br />
Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/eventloop-trace.js">eventloop-trace.js</a>
  <br /><br />
</li>

<li>
Make a program that filters a list of strings and returns a list with only your friends name in it.<br /><br />

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not<br /><br />

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]<br /><br />

i.e.<br />

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]<br />
Note: keep the original order of the names in the output.<br />
Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/filter-by-length.js">filter-by-length.js</a>
  <br /><br />
</li>


<li>
  Given an array Arr[] of size N, print all the subsets of the array.<br />
Link to the code: <a href="https://github.com/shlomisderot/javascript-interview-questions/blob/master/power-all-subsets.js">power-all-subsets.js</a>
  <br /><br />
</li>
  
</ol>







