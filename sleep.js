// implement C# Thread.Sleep like function in javascript

const sleep = (seconds) => {
  const startTime = new Date();
  
  const miliseconds = seconds * 1000;
  
  while (new Date() - startTime < miliseconds) { }
  
  return true;
}
