// Efficient way to count number of 1s in the binary representation of a number in O(1) if you have enough memory to play with. 
// This is an interview question I found on an online forum, but it had no answer. Can somebody suggest something, I cant think of a way to do it in O(1) time?

function bitCount(u)
{
    var uCount;

     uCount = u - ((u >> 1) & 033333333333) - ((u >> 2) & 011111111111);
     return ((uCount + (uCount >> 3)) & 030707070707) % 63;
}

function bitCount(x){
    x = (x & (0x55555555)) + ((x >> 1) & (0x55555555));
    x = (x & (0x33333333)) + ((x >> 2) & (0x33333333));
    x = (x & (0x0f0f0f0f)) + ((x >> 4) & (0x0f0f0f0f));
    x = (x & (0x00ff00ff)) + ((x >> 8) & (0x00ff00ff));
    x = (x & (0x0000ffff)) + ((x >> 16) & (0x0000ffff));
    return x;
}

function bitCount(n)
{
  let count = 0;
  while(n != 0){
    n = n&(n-1);
    count++;
  }
  return count;
}


