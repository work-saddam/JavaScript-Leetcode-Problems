// Factorial:------------------------------------------
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));   //120

// Fibonacci Series:--------------------------------------
function printFibonacciSeries(n) {
  function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
// printFibonacciSeries(5)          //0,1,1,2,3