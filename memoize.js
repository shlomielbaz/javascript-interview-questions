function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function pow(n) {
  return n * n;
}

function sum(a, b) {
  return a + b;
}

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);

    cache[key] = result;

    return result;
  };
}

  const fibonacciMemoized = memoize(fibonacci);
  const powerMemoized = memoize(pow);
  const sumMemoized = memoize(sum);
  
  console.log(fibonacciMemoized(9))
  console.log(powerMemoized(9))
  console.log(sumMemoized(4, 5))
  console.log(fibonacciMemoized(5))
  console.log(sumMemoized(4, 5))
  console.log(fibonacciMemoized(7))
  console.log(fibonacciMemoized(9))
  console.log(fibonacciMemoized(7))
  console.log(sumMemoized(4, 5))
