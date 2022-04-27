// implement C# Thread.Sleep like function in javascript

const sleep = (seconds) => {
  const now = new Date();
  
  const miliseconds = seconds * 1000;
  
  while (new Date() - now < miliseconds) { }
  
  return true;
}
