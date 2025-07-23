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

// Check Prime or not:-------------------------------------------
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
// console.log(isPrime(7))      //true
// console.log(isPrime(10))     //false